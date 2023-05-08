[中文](README.md) | English

# logseq-plugin-smart-typing

Enrich the editing experience in Logseq, automatically match all kinds of parentheses, quotation marks and mathematical equations. Supports auto text replacements too.

## Usage

https://user-images.githubusercontent.com/3410293/208813936-e61ddd8a-a809-42b1-add3-aa5159b46ac8.mp4

https://user-images.githubusercontent.com/3410293/217704473-ab818e2a-ac0e-46bc-adb4-7f2ec77206ab.mp4

## Feature Highlights

- More comprehensive auto-completion and deletion of paired punctuation.
- Fixed Logseq's built-in completion and deletion behavior (referring to VSCode) of paired punctuations.
- One-click wrapping of selected text with punctuation pairs.
- Auto replacement of text.
- User defined replacement rules. Supports JS expressions, placing cursor and providing some built-in functions.
- Regex trigger and replacement support for user defined rules.
- User can define custom functions. Create a code block and give it a `#.fn` tag. The code within the code block will be read by the plugin on startup. You can also run "Reload user functions" from within the command palette (`mod+shift+p`) later to reload if you modified the code.

## Built-In Functions

`time(is24Hours)` - Returns the current time, `is24Hours` true if 24-hours system, default is true.

`date(dayOffset)` - Returns date, an optional `dayOffset` can be given, -1 means yesterday, 1 means tomorrow, etc. The default is 0 which is today.

`random(from, to)` - Returns a random number between `from` and `to`, inclusive.

`choose(...choices)` - Given a set of values, returns one randomly.

`clipboard()` - Read clipboard's text.

`callPlugin(key, ...args)` - Invoke commands of your installed plugins, e.g, calling the "insert timestamp" command from the [Media Timestamp](https://github.com/sethyuan/logseq-plugin-media-ts) plugin: `{{callPlugin("logseq-media-ts.commands.insert-media-ts")}}`. Plugins IDs can be found in Logseq's plugins page, commands can be found in your plugins' source code.

`callCommand(key, ...args)` - Invode Logseq commands, e.g, calling Logseq's cycle TODO command: `{{callCommand("logseq.editor/cycle-todo")}}`. Find the commands you can use [here](https://logseq.github.io/plugins/types/ExternalCommandType.html).

### User defined functions example

![image](https://user-images.githubusercontent.com/3410293/208601883-7c4e421e-43d4-43b1-8438-4cfdf59d030a.png)

## ⚠️ Caution

Please check the source of the JS expressions and user-defined functions you use and make sure you trust them. Insecure code from outside sources may have risks such as privacy leaks!

## Buy me a coffee

If you think the software I have developed is helpful to you and would like to give recognition and support, you may buy me a coffee using following link. Thank you for your support and attention.

<a href="https://www.buymeacoffee.com/sethyuan" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
