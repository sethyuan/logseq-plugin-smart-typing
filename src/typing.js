const PairOpenChars = "([{\"'（【「《“‘"
const PairCloseChars = ")]}\"'）】」》”’"
const CloseParenChars = ")]}）】」》"
const WrapIdenChars = "$\"'¥￥（【「《·“‘”’"
const WrapOpenChars = "$\"'$$（【「《`“‘“‘"
const WrapCloseChars = "$\"'$$）】」》`”’”’"
const SpecialKeys = [
  ["【【", { repl: "[[|]]", del: 1 }],
  ["（（", { repl: "((|))", del: 1 }],
  ["：：", { repl: ":: ", del: 0 }],
  ["···", { repl: "```|```", del: 0 }],
]

export function init() {
  const appContainer = parent.document.getElementById("app-container")
  appContainer.addEventListener("keydown", handler)
}

export function cleanUp() {
  const appContainer = parent.document.getElementById("app-container")
  appContainer.removeEventListener("keydown", handler)
}

async function handler(e) {
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
  if (textarea.selectionStart === textarea.selectionEnd) {
    ;(await handleSpecialKeys(textarea, blockUUID, e)) ||
      (await handlePairs(textarea, blockUUID, e))
  } else {
    await handleSelection(textarea, blockUUID, e)
  }
}

async function handlePairs(textarea, blockUUID, e) {
  const char = getChar(e)
  const openIndex = PairOpenChars.indexOf(char)
  if (openIndex > -1) {
    const nextChar = textarea.value[textarea.selectionStart]
    e.preventDefault()
    if (
      nextChar == null ||
      CloseParenChars.includes(nextChar) ||
      /^\s$/.test(nextChar)
    ) {
      await updateText(
        textarea,
        blockUUID,
        `${char}${PairCloseChars[openIndex]}`,
        0,
        0,
        -1,
      )
    } else {
      await updateText(textarea, blockUUID, char)
    }
    return true
  } else if (char === "Backspace") {
    const prevChar = textarea.value[textarea.selectionStart - 1]
    const nextChar = textarea.value[textarea.selectionStart]
    const openIndex = PairOpenChars.indexOf(prevChar)
    if (openIndex > -1 && nextChar === PairCloseChars[openIndex]) {
      e.preventDefault()
      await updateText(textarea, blockUUID, "", -1, 1, 0)
      return true
    }
  }
  return false
}

async function handleSpecialKeys(textarea, blockUUID, e) {
  for (const [specialKey, { repl, del }] of SpecialKeys) {
    if (
      getChar(e) === specialKey[specialKey.length - 1] &&
      matchSpecialKey(textarea.value, textarea.selectionStart, specialKey)
    ) {
      e.preventDefault()
      const barPos = repl.lastIndexOf("|")
      const cursor = barPos < 0 ? 0 : barPos - repl.length + 1
      await updateText(
        textarea,
        blockUUID,
        barPos < 0
          ? repl
          : `${repl.substring(0, barPos)}${repl.substring(barPos + 1)}`,
        -specialKey.length + 1,
        del,
        cursor,
      )
      return true
    }
  }
  return false
}

async function handleSelection(textarea, blockUUID, e) {
  let i = WrapIdenChars.indexOf(getChar(e))
  if (i > -1) {
    e.preventDefault()
    await updateText(
      textarea,
      blockUUID,
      `${WrapOpenChars[i]}${textarea.value.substring(
        textarea.selectionStart,
        textarea.selectionEnd,
      )}${WrapCloseChars[i]}`,
    )
    return true
  }
  return false
}

async function updateText(
  textarea,
  blockUUID,
  text,
  delStartOffset = 0,
  delEndOffset = 0,
  cursorOffset = 0,
) {
  const collapsed = textarea.selectionStart === textarea.selectionEnd
  const startPos = textarea.selectionStart + delStartOffset
  const endPos = textarea.selectionEnd + delEndOffset
  const newPos = startPos + text.length + cursorOffset
  const content = textarea.value
  await logseq.Editor.updateBlock(
    blockUUID,
    startPos < content.length
      ? `${content.substring(0, startPos)}${text}${content.substring(endPos)}`
      : startPos === content.length
      ? `${content}${text}`
      : `${content} ${text}`,
  )
  textarea.focus()
  textarea.setSelectionRange(
    collapsed ? newPos : startPos + 1,
    collapsed ? newPos : newPos - 1,
  )
}

function matchSpecialKey(text, start, specialKey) {
  for (let i = specialKey.length - 2, j = -1; i >= 0; i--, j--) {
    if (text[start + j] !== specialKey[i]) return false
  }
  return true
}

function getChar(e) {
  if (e.key !== "Process") return e.key

  if (e.shiftKey) {
    switch (e.code) {
      case "Digit1":
        return "！"
      case "Digit4":
        return "￥"
      case "Digit9":
        return "（"
      case "Digit0":
        return "）"
      case "Backquote":
        return "～"
      case "Backslash":
        return "｜"
      case "Semicolon":
        return "："
      case "Quote":
        return "“"
      case "Comma":
        return "《"
      case "Period":
        return "》"
      case "Slash":
        return "？"
      default:
        return null
    }
  } else {
    switch (e.code) {
      case "BracketLeft":
        return "【"
      case "BracketRight":
        return "】"
      case "Backquote":
        return "·"
      case "Slash":
      case "Backslash":
        return "、"
      case "Semicolon":
        return "；"
      case "Quote":
        return "‘"
      case "Comma":
        return "，"
      case "Period":
        return "。"
      default:
        return null
    }
  }
}
