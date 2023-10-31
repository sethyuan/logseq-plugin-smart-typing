中文 | [English](README.en.md)

# logseq-plugin-smart-typing

丰富在 Logseq 中的编辑体验，自动配对各类括号、引号、数学算式以及自定义替换。支持中文标点符号的配对。

## 使用展示

https://user-images.githubusercontent.com/3410293/208813936-e61ddd8a-a809-42b1-add3-aa5159b46ac8.mp4

https://user-images.githubusercontent.com/3410293/217704473-ab818e2a-ac0e-46bc-adb4-7f2ec77206ab.mp4

## 功能展示

- 更全面的配对标点的自动补完与删除。
- 更正 Logseq 内置配对标点补完与删除的行为（参考 VSCode）。
- 一键用配对标点包裹选中的文字。
- 文字替换。
- 用户可自定义文字替换，支持 JS 表达式与光标定位并囊括了一些内置函数。
- 自定义文字替换支持正则表达式触发与替换（空格触发）。
- 用户可自定义函数。创建一个代码块，给它一个 `#.fn` 的标签，代码块中的函数会被插件在启动时读取。后面如果函数有修改的话可以在命令栏里（`mod+shift+p`）执行“重新加载用户函数”。

## 内置函数

`time(is24Hours)` - 返回当前时间，`is24Hours` 为 false 则 12 小时制，否则 24 小时制。默认 24 小时制。

`date(dayOffset)` - 返回日期，可选给定`dayOffset`，不给为今天，-1 为昨天，1 为明天，依此类推。

`dateFns` - `date-fns`库，里面包含了其全部的函数，文档参看[这里](https://date-fns.org/v2.29.3/docs/Getting-Started)。

`random(from, to)` - 返回介于 `from` 与 `to` 之间的一个随机数，包含 from 和 to。

`choose(...choices)` - 给定一组值，随机返回其中一个。

`clipboard()` - 读取剪切板文字。

`callPlugin(key, ...args)` - 调用各类插件提供的命令，例如调用 [Media Timestamp](https://github.com/sethyuan/logseq-plugin-media-ts) 提供的插入时间戳的命令 `{{callPlugin("logseq-media-ts.commands.insert-media-ts")}}`。各插件的 ID 可在 Logseq 的插件界面查看，命令需要在插件源码中查找。

`callCommand(key, ...args)` - 调用 Logseq 提供的命令，例如调用 `{{callCommand("logseq.editor/cycle-todo")}}`，能调用的命令可查看[这里](https://logseq.github.io/plugins/types/ExternalCommandType.html)。

### 自定义函数示例

![image](https://user-images.githubusercontent.com/3410293/208601883-7c4e421e-43d4-43b1-8438-4cfdf59d030a.png)

## ⚠️ 注意

请确认您使用的 JS 表达式和用户自定义函数的来源，确保您信任它们。外来的不安全代码可能有隐私泄漏等风险！

## Buy me a coffee

如果您认为我所开发的软件对您有所帮助，并且愿意给予肯定和支持，不妨扫描下方的二维码进行打赏。感谢您的支持与关注。

![wx](https://user-images.githubusercontent.com/3410293/236807219-cf21180a-e7f8-44a9-abde-86e1e6df999b.jpg) ![ap](https://user-images.githubusercontent.com/3410293/236807256-f79768a7-16e0-4cbf-a9f3-93f230feee30.jpg)
