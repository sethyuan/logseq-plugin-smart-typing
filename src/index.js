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
      inputAs: "textarea",
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
      inputAs: "textarea",
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
      inputAs: "textarea",
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
      inputAs: "textarea",
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
      inputAs: "textarea",
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
      inputAs: "textarea",
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
      inputAs: "textarea",
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
      inputAs: "textarea",
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
      inputAs: "textarea",
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
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger11",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement11",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger12",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement12",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger13",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement13",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger14",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement14",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger15",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement15",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger16",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement16",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger17",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement17",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger18",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement18",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger19",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement19",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger20",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement20",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger21",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement21",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger22",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement22",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger23",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement23",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger24",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement24",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger25",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement25",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger26",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement26",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger27",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement27",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger28",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement28",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger29",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement29",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger30",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement30",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger31",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement31",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger32",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement32",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger33",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement33",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger34",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement34",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger35",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement35",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger36",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement36",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger37",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement37",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger38",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement38",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger39",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement39",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger40",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement40",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger41",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement41",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger42",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement42",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger43",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement43",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger44",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement44",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger45",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement45",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger46",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement46",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger47",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement47",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger48",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement48",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger49",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement49",
      type: "string",
      inputAs: "textarea",
      default: "",
      description: t(
        "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
      ),
    },
    {
      key: "trigger50",
      type: "string",
      default: "",
      description: t(
        "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex.",
      ),
    },
    {
      key: "replacement50",
      type: "string",
      inputAs: "textarea",
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
