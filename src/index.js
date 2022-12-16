import "@logseq/libs"
import { smartTypingCleanUp, smartTypingInit } from "./typing"

async function main() {
  smartTypingInit()

  logseq.beforeunload(smartTypingCleanUp)

  console.log("#smart-typing loaded")
}

logseq.ready(main).catch(console.error)
