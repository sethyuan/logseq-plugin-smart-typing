# logseq-plugin-smart-typing

丰富在 Logseq 中的编辑体验，自动配对各类括号、引号以及数学算式。支持中文标点符号的配对。

Enrich the editing experience in Logseq, automatically match all kinds of parentheses, quotation marks and mathematical equations. Support for matching Chinese punctuation marks.

## 功能展示

- 更全面的配对标点的自动补完与删除。
- 更正 Logseq 内置配对标点补完与删除的行为（参考 VSCode）。
- 一键用配对标点包裹选中的文字。
- 特殊文字组合的替换。
- 用户可自定义特殊文字组合的替换，支持 JS 表达式与光标定位并囊括了一些内置函数。

### 内置函数

`time(is24Hours)` - 返回当前时间，`is24Hours` 为 false 则 12 小时制，否则 24 小时制。默认 24 小时制。
`date(dayOffset)` - 返回日期，可选给定`dayOffset`，不给为今天，-1 为昨天，1 为明天，依此类推。
`random(from, to)` - 返回介于 `from` 与 `to` 之间的一个随机数，包含 from 和 to。
`choose(...choices)` - 给定一组值，随机返回其中一个。

## Feature Highlights

- More comprehensive auto-completion and deletion of paired punctuation.
- Fixed Logseq's built-in completion and deletion behavior (referring to VSCode) of paired punctuations.
- One-click wrapping of selected text with punctuation pairs.
- Replacement of special text combinations.
- User defined replacement rules. Supports JS expressions, placing cursor and providing some built-in functions.

### Built-In Functions

`time(is24Hours)` - Returns the current time, `is24Hours` true if 24-hours system, default is true.
`date(dayOffset)` - Returns date, an optional `dayOffset` can be given, -1 means yesterday, 1 means tomorrow, etc. The default is 0 which is today.
`random(from, to)` - Returns a random number between `from` and `to`, inclusive.
`choose(...choices)` - Given a set of values, returns one randomly.

## 使用展示 (Usage)

https://user-images.githubusercontent.com/3410293/208099641-89d3f0ba-7146-4e8c-b4b4-cf859ca2f42c.mp4

https://user-images.githubusercontent.com/3410293/208390027-f2167840-d315-4cbc-9884-67729de88c97.mp4
