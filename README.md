# logseq-plugin-smart-typing

丰富在 Logseq 中的编辑体验，自动配对各类括号、引号以及数学算式。支持中文标点符号的配对。

Enrich the editing experience in Logseq, automatically match all kinds of parentheses, quotation marks and mathematical equations. Support for matching Chinese punctuation marks.

## 使用展示 (Usage)

https://user-images.githubusercontent.com/3410293/208813936-e61ddd8a-a809-42b1-add3-aa5159b46ac8.mp4

## 功能展示

- 更全面的配对标点的自动补完与删除。
- 更正 Logseq 内置配对标点补完与删除的行为（参考 VSCode）。
- 一键用配对标点包裹选中的文字。
- 特殊文字组合的替换。
- 用户可自定义特殊文字组合的替换，支持 JS 表达式与光标定位并囊括了一些内置函数。
- 用户可自定义函数。创建一个代码块，给它一个 `#.fn` 的标签，代码块中的函数会被插件在启动时读取。后面如果函数有修改的话可以在命令栏里（`mod+shift+p`）执行“重新加载用户函数”。

### 内置函数

`time(is24Hours)` - 返回当前时间，`is24Hours` 为 false 则 12 小时制，否则 24 小时制。默认 24 小时制。

`date(dayOffset)` - 返回日期，可选给定`dayOffset`，不给为今天，-1 为昨天，1 为明天，依此类推。

`random(from, to)` - 返回介于 `from` 与 `to` 之间的一个随机数，包含 from 和 to。

`choose(...choices)` - 给定一组值，随机返回其中一个。

`clipboard()` - 读取剪切板文字。

### 自定义函数示例

![image](https://user-images.githubusercontent.com/3410293/208601883-7c4e421e-43d4-43b1-8438-4cfdf59d030a.png)

## ⚠️ 注意

请确认您使用的 JS 表达式和用户自定义函数的来源，确保您信任它们。外来的不安全代码可能有隐私泄漏等风险！

## Feature Highlights

- More comprehensive auto-completion and deletion of paired punctuation.
- Fixed Logseq's built-in completion and deletion behavior (referring to VSCode) of paired punctuations.
- One-click wrapping of selected text with punctuation pairs.
- Replacement of special text combinations.
- User defined replacement rules. Supports JS expressions, placing cursor and providing some built-in functions.
- User can define custom functions. Create a code block and give it a `#.fn` tag. The code within the code block will be read by the plugin on startup. You can also run "Reload user functions" from within the command palette (`mod+shift+p`) later to reload if you modified the code.

### Built-In Functions

`time(is24Hours)` - Returns the current time, `is24Hours` true if 24-hours system, default is true.

`date(dayOffset)` - Returns date, an optional `dayOffset` can be given, -1 means yesterday, 1 means tomorrow, etc. The default is 0 which is today.

`random(from, to)` - Returns a random number between `from` and `to`, inclusive.

`choose(...choices)` - Given a set of values, returns one randomly.

`clipboard()` - Read clipboard's text.

### User defined functions example

![image](https://user-images.githubusercontent.com/3410293/208601883-7c4e421e-43d4-43b1-8438-4cfdf59d030a.png)

## ⚠️ Caution

Please check the source of the JS expressions and user-defined functions you use to make sure you trust them. Insecure code from outside sources may have risks such as privacy leaks!
