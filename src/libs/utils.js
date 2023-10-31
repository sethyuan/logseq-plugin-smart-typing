import { t } from "logseq-l10n"

export function generateTriggerSchema() {
  const schema = []
  for (let i = 1; i <= 100; i++) {
    schema.push(
      {
        key: `trigger${i}`,
        type: "string",
        default: "",
        description: t(
          "Trigger characters. Ending in space will trigger on word boundary; ending in double spaces will trigger on space but will not type space on screen; ending in triple spaces to enable regex, triggered on space.",
        ),
      },
      {
        key: `replacement${i}`,
        type: "string",
        inputAs: "textarea",
        default: "",
        description: t(
          "Replacement. JS expressions are in double curly brackets like `{{time()}}`. `|` means cursor position.",
        ),
      },
    )
  }
  return schema
}
