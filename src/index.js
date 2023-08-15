import "@logseq/libs"
import { setup, t } from "logseq-l10n"
import { generateTriggerSchema } from "./libs/utils"
import zhCN from "./translations/zh-CN.json"
import { cleanUp, init, reloadUserFns, reloadUserRules } from "./typing"

async function main() {
  await setup({ builtinTranslations: { "zh-CN": zhCN } })

  await reloadUserFns()
  init()

  logseq.useSettingsSchema([
    {
      key: "enableColon",
      type: "boolean",
      default: true,
      description: t("Enable or not Chinese double-colon replacement."),
    },
    ...generateTriggerSchema(),
  ])

  const settingsOff = logseq.onSettingsChanged(reloadUserRules)

  logseq.App.registerCommandPalette(
    {
      key: "reload-user-fns",
      label: t("Reload user functions"),
    },
    async () => {
      await reloadUserFns()
      await logseq.UI.showMsg(t("User defined functions reloaded."))
    },
  )

  logseq.beforeunload(() => {
    settingsOff()
    cleanUp()
  })

  console.log("#smart-typing loaded")
}

logseq.ready(main).catch(console.error)
