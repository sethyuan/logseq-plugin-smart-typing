import "@logseq/libs"
import { setup, t } from "logseq-l10n"
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
    {
      key: "enableBrackets",
      type: "boolean",
      default: true,
      description: t("Enable or not Chinese double-bracket replacement."),
    },
    {
      key: "trigger1",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement1",
      type: "string",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger2",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement2",
      type: "string",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger3",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement3",
      type: "string",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger4",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement4",
      type: "string",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger5",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement5",
      type: "string",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger6",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement6",
      type: "string",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger7",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement7",
      type: "string",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger8",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement8",
      type: "string",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger9",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement9",
      type: "string",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger10",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement10",
      type: "string",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
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
