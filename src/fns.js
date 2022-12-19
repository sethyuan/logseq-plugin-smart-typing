import { addDays, format } from "date-fns"

window.time = (is24Hours = true) => {
  const now = new Date()
  if (is24Hours) {
    return format(now, "HH:mm", now)
  } else {
    return format(now, "h:m aa")
  }
}

window.date = async (dayOffset = 0) => {
  const { preferredDateFormat } = await logseq.App.getUserConfigs()
  const now = addDays(new Date(), dayOffset)
  return format(now, preferredDateFormat, now)
}

window.random = (from, to) => {
  if (from > to) return from
  return ~~(Math.random() * (to + 1 - from)) + from
}

window.choose = (...choices) => {
  if (choices.length <= 0) return ""
  const index = random(0, choices.length - 1)
  return choices[index]
}
