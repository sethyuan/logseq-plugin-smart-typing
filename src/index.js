import "@logseq/libs"
import { cleanUp, init } from "./typing"

async function main() {
  init()

  logseq.beforeunload(cleanUp)

  console.log("#smart-typing loaded")
}

logseq.ready(main).catch(console.error)
