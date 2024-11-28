# TongWeiCodePen - Html Conversion Tools

TongWeiCodePen 是一个用于将 HTML、Js 或 Json 代码段转换为多种格式的在线工具。这个项目帮助用户在不同格式之间转换代码，提升开发效率。

## 功能特性

- **Html 转换为 Ajax 所需字符串**: 通过简单的界面和输入框，用户可以方便地将 HTML 代码转换为 Ajax 请求所需的字符串格式。
  
- **参数代码块批量生成**: 使用用户自定义格式遍历参数，批量生成代码块，支持复杂项目的高效开发。

- **多种转换操作**:
  - Html 转为 Js
  - Js 转为 Html
  - Html 转为 Js 数组
  - Json 数据格式化

- **Json 解析和格式化**: 
  将输入的 Json 数据解析并验证其格式，支持格式化和压缩的选项。

## 使用方法

1. **输入代码**:  
   打开页面后，您将在左侧的输入框中输入要转换的 HTML/Js/Json 代码。在右侧的参数输入框中（可选），输入拟转换的参数。
   
2. **选择转换操作**:
   - `Html转为Js`: 将 HTML 转为 JavaScript 字符串。
   - `Js转为Html`: 将 JavaScript 字符串转换回 HTML 格式。
   - `Html转为Js数组`: 将 HTML 转为 JavaScript 数组格式。
   - `Free Conversion`: 使用自定义参数进行格式转换。

3. **Json格式化和验证**:
   - 使用 `Json格式化` 按钮格式化并验证输入的 Json 数据。

4. **查看结果**:
   代码转换或解析结果将在页面的结果文本框中显示。

## 技术细节

- **依赖库**:
  - [jQuery](https://jquery.com/)
  - [Bootstrap](https://getbootstrap.com/)

- **JavaScript 功能**:
  - `tojs()`: 将 HTML 转换为 JavaScript 字符串。
  - `tohtml()`: 将 JavaScript 字符串转换为 HTML。
  - `htmltoarray()`: 将 HTML 转换为 JavaScript 数组。
  - `tomc()`: 利用自定义参数替换和循环创建脚本。
  - `validate()`: 校验和格式化 Json 数据。
  - `jsl.parser` 和 `jsl.format`: 用于解析和格式化 Json 文本。

- **如何运行**:
  该页面是一个简单的 HTML 页面，使用 jQuery 和 Bootstrap 提供的交互功能。套用浏览器即可直接使用。

## 贡献

欢迎对这项工具提出改进建议。如果你想为项目做出贡献，请提出你的想法，或者通过创建 PR 提交你的代码。

## 许可

该项目采用 MIT 许可。请查阅 LICENSE 文件以获取更多细节。
