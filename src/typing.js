import "./fns"

const PairOpenChars = '([{"（【「『《〈“‘'
const PairCloseChars = ')]}"）】」』》〉”’'
const WrapIdenChars = "$\"'([¥￥（【「《·“‘”’"
const WrapOpenChars = "$\"'([$$（【「《`“‘“‘"
const WrapCloseChars = "$\"')]$$）】」》`”’”’"
const BuiltInSpecialKeys = [
  ["：：", "::"],
  ["···", "```|```"],
]
let specialKeys = [...BuiltInSpecialKeys]

const evaluate = eval

const WordBoundaryR =
  /[^\u2E80-\u2FFF\u31C0-\u31EF\u3300-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\uFE30-\uFE4FA-Za-z_]/

let beforeInputTextArea = {}

export function init() {
  const appContainer = parent.document.getElementById("app-container")
  appContainer.addEventListener("keydown", keydownHandler)
  appContainer.addEventListener("beforeinput", beforeInputHandler)
  appContainer.addEventListener("input", inputHandler)
  appContainer.addEventListener("compositionend", inputHandler)
}

export function cleanUp() {
  const appContainer = parent.document.getElementById("app-container")
  appContainer.removeEventListener("compositionend", inputHandler)
  appContainer.removeEventListener("input", inputHandler)
  appContainer.removeEventListener("beforeinput", beforeInputHandler)
  appContainer.removeEventListener("keydown", keydownHandler)
}

export function reloadUserRules() {
  const userRules = getUserRules()
  if (userRules.length > 0) {
    specialKeys = [...BuiltInSpecialKeys, ...userRules]
  }
}

export async function reloadUserFns() {
  const fnStrings = (
    await logseq.DB.datascriptQuery(
      `[:find (pull ?b [:block/content])
      :where
      [?t :block/name ".fn"]
      [?b :block/refs ?t]]`,
    )
  ).map((item) => item[0].content.match(/```.+\n((?:.|\n)+)\n```/)[1])

  for (const fnStr of fnStrings) {
    evaluate(fnStr)
  }
}

async function keydownHandler(e) {
  if (
    e.target.nodeName !== "TEXTAREA" ||
    !e.target.parentElement.classList.contains("block-editor") ||
    e.isComposing ||
    e.repeat ||
    e.metaKey ||
    e.ctrlKey ||
    e.altKey
  )
    return

  const textarea = e.target
  const blockUUID = textarea.closest("[blockid]").getAttribute("blockid")

  // Prevent Logseq's default '(', '（', '[' and '【' behavior.
  if (
    (e.shiftKey && e.code === "Digit9") ||
    (!e.shiftKey && e.code === "BracketLeft")
  ) {
    e.stopPropagation()
  }

  if (textarea.selectionStart === textarea.selectionEnd) {
    if (e.key === "Backspace") {
      // Pair deletion behavior.
      const prevChar = textarea.value[textarea.selectionStart - 1]
      const nextChar = textarea.value[textarea.selectionStart]
      const openIndex = PairOpenChars.indexOf(prevChar)
      if (openIndex > -1 && nextChar === PairCloseChars[openIndex]) {
        e.preventDefault()
        await updateText(textarea, blockUUID, "", -1, 1, 0)
      }
    }
  }
}

function beforeInputHandler(e) {
  if (e.data == null) return

  // HACK: Workaround for Windows IME
  if (e.data.length === 1 && e.data === beforeInputTextArea.data) return

  beforeInputTextArea = {
    data: e.data,
    value: e.target.value,
    selectionStart: e.target.selectionStart,
    selectionEnd: e.target.selectionEnd,
    focus: e.target.focus.bind(e.target),
    setSelectionRange: e.target.setSelectionRange.bind(e.target),
  }
}

async function inputHandler(e) {
  if (
    e.data == null ||
    e.target.nodeName !== "TEXTAREA" ||
    !e.target.parentElement.classList.contains("block-editor") ||
    e.isComposing
  )
    return

  const textarea = e.target
  const before = beforeInputTextArea
  const blockUUID = e.target.closest("[blockid]").getAttribute("blockid")

  // reset every beforeinput -> input/compositionend cycle.
  beforeInputTextArea = {}

  if (
    before.selectionStart !== before.selectionEnd &&
    e.data.length === 1 &&
    before.value.substring(before.selectionStart, before.selectionEnd) !==
      e.data
  ) {
    await handleSelection(before, blockUUID, e)
  } else {
    ;(await handleSpecialKeys(textarea, blockUUID, e)) ||
      (await handlePairs(textarea, blockUUID, e))
  }
}

async function handleSpecialKeys(textarea, blockUUID, e) {
  const char = e.data[e.data.length - 1]
  const isBoundaryChar = WordBoundaryR.test(char)
  for (let [specialKey, repl] of specialKeys) {
    const doubleSpaceTrigger = specialKey.endsWith("  ")
    const lastChar = specialKey[specialKey.length - 1]
    const isBoundary = lastChar === " " && isBoundaryChar
    if (
      ((char === " " && doubleSpaceTrigger) ||
        isBoundary ||
        char === lastChar) &&
      matchSpecialKey(
        textarea.value,
        textarea.selectionStart,
        specialKey,
        doubleSpaceTrigger ? 3 : 2,
      )
    ) {
      const calls = await Promise.all(
        Array.from(
          repl.matchAll(/\{\{((?:[^\{\}]|\{(?!\{)|\}(?!\}))+)\}\}/g),
        ).map(async (m) => {
          return {
            start: m.index,
            end: m.index + m[0].length,
            repl: await evaluate(m[1]),
          }
        }),
      )
      let barPos = findBarPos(repl, calls)
      if (calls.length > 0) {
        let i = 0
        const segments = []
        for (const call of calls) {
          segments.push(repl.substring(i, call.start))
          segments.push(call.repl)
          i = call.end
          if (call.end < barPos) {
            barPos += call.repl.length - (call.end - call.start)
          }
        }
        segments.push(repl.substring(i))
        repl = segments.join("")
      }

      const cursor =
        barPos < 0
          ? 0
          : barPos -
            repl.length +
            1 -
            (!doubleSpaceTrigger && isBoundary ? 1 : 0)
      await updateText(
        textarea,
        blockUUID,
        barPos < 0
          ? `${repl}${!doubleSpaceTrigger && isBoundary ? char : ""}`
          : `${repl.substring(0, barPos)}${repl.substring(barPos + 1)}${
              !doubleSpaceTrigger && isBoundary ? char : ""
            }`,
        -specialKey.length + (doubleSpaceTrigger ? 1 : 0),
        0,
        cursor,
      )

      return true
    }
  }
  return false
}

async function handlePairs(textarea, blockUUID, e) {
  if (e.data.length > 1) return
  const char = e.data[0]
  const i = PairOpenChars.indexOf(char)
  const nextChar = textarea.value[textarea.selectionStart]
  if (char === nextChar && PairCloseChars.includes(char)) {
    await updateText(textarea, blockUUID, "", 0, 1)
    return true
  } else if (i > -1) {
    const prevChar = textarea.value[textarea.selectionStart - 2]
    if (prevChar === char && nextChar === PairCloseChars[i]) {
      if (char === "（" || char === "(") {
        await updateText(textarea, blockUUID, `((`, -2, 1, 0)
        return true
      } else if (char === "【" || char === "[") {
        await updateText(textarea, blockUUID, `[[`, -2, 1, 0)
        return true
      }
    }
    if (char === "〈" && prevChar === "《" && nextChar === "》") {
      await updateText(textarea, blockUUID, `<`, -2, 1, 0)
      return true
    }
    if (
      nextChar == null ||
      PairCloseChars.includes(nextChar) ||
      /^\s$/.test(nextChar)
    ) {
      await updateText(textarea, blockUUID, PairCloseChars[i], 0, 0, -1)
      return true
    }
  }
  return false
}

async function handleSelection(textarea, blockUUID, e) {
  if (e.data.length > 1) return
  const char = e.data[0]
  let i = WrapIdenChars.indexOf(char)
  if (i > -1) {
    const prevChar = textarea.value[textarea.selectionStart - 1]
    const nextChar = textarea.value[textarea.selectionEnd]
    const text = textarea.value.substring(
      textarea.selectionStart,
      textarea.selectionEnd,
    )
    if (prevChar === char && nextChar === WrapCloseChars[i]) {
      if (char === "（" || char === "(") {
        await updateText(textarea, blockUUID, `((${text}))`, -1, 1, 0, 2)
      } else if (char === "【" || char === "[") {
        await updateText(textarea, blockUUID, `[[${text}]]`, -1, 1, 0, 2)
      }
    } else {
      await updateText(
        textarea,
        blockUUID,
        `${WrapOpenChars[i]}${text}${WrapCloseChars[i]}`,
      )
    }
  }
}

function updateText(
  textarea,
  blockUUID,
  text,
  delStartOffset = 0,
  delEndOffset = 0,
  cursorOffset = 0,
  numWrapChars = 1,
) {
  const collapsed = textarea.selectionStart === textarea.selectionEnd
  const startPos = textarea.selectionStart + delStartOffset
  const endPos = textarea.selectionEnd + delEndOffset
  const newPos = startPos + text.length + cursorOffset
  const content = textarea.value
  return new Promise((resolve, reject) => {
    // HACK: postpone block update to guarantee other input events go first.
    setTimeout(async () => {
      try {
        await logseq.Editor.updateBlock(
          blockUUID,
          startPos < content.length
            ? `${content.substring(0, startPos)}${text}${content.substring(
                endPos,
              )}`
            : startPos === content.length
            ? `${content}${text}`
            : `${content} ${text}`,
        )
      } catch (err) {
        reject(err)
      }
      textarea.focus()
      textarea.setSelectionRange(
        collapsed ? newPos : startPos + numWrapChars,
        collapsed ? newPos : newPos - numWrapChars,
      )
      resolve()
    }, 0)
  })
}

function matchSpecialKey(text, start, specialKey, skip) {
  for (let i = specialKey.length - skip, j = -2; i >= 0; i--, j--) {
    if (text[start + j] !== specialKey[i]) return false
  }
  return true
}

function findBarPos(str, calls) {
  chars: for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === "|") {
      for (const call of calls) {
        if (i >= call.start && i <= call.end) {
          continue chars
        }
      }
      return i
    }
  }
  return -1
}

function getUserRules() {
  const settings = logseq.settings
  const ret = []
  for (const key of Object.keys(settings)) {
    const match = key.match(/(.+)(\d)$/)
    if (!match) {
      ret[key] = settings[key]
      continue
    }
    const [, k, n] = match
    const i = +n - 1
    if (ret[i] == null) {
      ret[i] = new Array(2)
    }
    if (k === "trigger") {
      ret[i][0] = settings[key]
    } else if (k === "replacement") {
      ret[i][1] = settings[key]
    }
  }
  return ret.filter((rule) => rule[0])
}
