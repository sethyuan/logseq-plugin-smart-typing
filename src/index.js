import "@logseq/libs"
import { setup, t } from "logseq-l10n"
import zhCN from "./translations/zh-CN.json"
import { cleanUp, init, reloadUserRules } from "./typing"

async function main() {
  await setup({ builtinTranslations: { "zh-CN": zhCN } })

  init()

  logseq.useSettingsSchema([
    {
      key: "trigger1",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary.",
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
        "Trigger characters. Ending in space will trigger on word boundary.",
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
        "Trigger characters. Ending in space will trigger on word boundary.",
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
        "Trigger characters. Ending in space will trigger on word boundary.",
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
        "Trigger characters. Ending in space will trigger on word boundary.",
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
        "Trigger characters. Ending in space will trigger on word boundary.",
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
        "Trigger characters. Ending in space will trigger on word boundary.",
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
        "Trigger characters. Ending in space will trigger on word boundary.",
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
        "Trigger characters. Ending in space will trigger on word boundary.",
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
        "Trigger characters. Ending in space will trigger on word boundary.",
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

  logseq.beforeunload(() => {
    settingsOff()
    cleanUp()
  })

  console.log("#smart-typing loaded")
}

logseq.ready(main).catch(console.error)
