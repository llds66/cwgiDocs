---
title: 开始
---

# 开始

## 立即体验
```html
<!-- index.html -->
<link rel="stylesheet" href="https://cwgi-cli.jw1.dev/style.css">
<div id="cwgi_box"></div>
<script src="https://cwgi-cli.jw1.dev/cwgi.iife.js"></script>
```

```js
// index.js
_CWGI.init()
```

<details>
<summary>ES module version</summary>

```html
<!-- index.html -->
<link rel="stylesheet" href="https://cwgi-cli.jw1.dev/style.css">
<div id="cwgi_box"></div>
```

```js
// index.js

// 您可以像这样使用它，也可以将其下载到您的项目中并导入它
import {init} from 'https://cwgi-cli.jw1.dev/cwgi.js'

init()
```

</details>

## 详细配置

1. [GitHub App](/github-app) - _必需_, 您需要一个 GitHub 应用程序来验证用户
2. [Server side](/server-side) - 可选, 您需要一个后端来处理 GitHub API 请求
3. [Client side](/client-side) - _必需_, 您需要在博客中包含脚本和样式