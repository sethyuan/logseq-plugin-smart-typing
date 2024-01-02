import * as dateFns from "date-fns"

window.time = (is24Hours = true) => {
  const now = new Date()
  if (is24Hours) {
    return dateFns.format(now, "HH:mm")
  } else {
    return dateFns.format(now, "hh:hm aa")
  }
}

window.date = async (dayOffset = 0) => {
  const { preferredDateFormat } = await logseq.App.getUserConfigs()
  const now = dateFns.addDays(new Date(), dayOffset)
  return dateFns.format(now, preferredDateFormat)
}

window.dateFormat = (date, formatStr) => {
  return dateFns.format(date, formatStr)
}

window.dateParse = dateFns.parse

window.dateFns = dateFns

window.random = (from, to) => {
  if (from > to) return from
  return ~~(Math.random() * (to + 1 - from)) + from
}

window.choose = (...choices) => {
  if (choices.length <= 0) return ""
  const index = random(0, choices.length - 1)
  return choices[index]
}

window.clipboard = async () => {
  return (await parent.navigator.clipboard.readText()) ?? ""
}

window.callPlugin = (key, ...args) => {
  // HACK: Wait some time to allow text update to run first.
  setTimeout(() => logseq.App.invokeExternalPlugin(key, ...args), 50)
  return ""
}

window.callCommand = (key, ...args) => {
  // HACK: Wait some time to allow text update to run first.
  setTimeout(() => logseq.App.invokeExternalCommand(key, ...args), 50)
  return ""
}
