---
title: '客户端配置'
---


# CWGI - Set up the client side
::: tip 原文转载自：[cwgi-docs](https://cwgi-docs.jw1.dev/) by [jw-12138](https://github.com/jw-12138)
:::
---
客户端代码是使用 Solid.js 和 TailwindCSS 构建的，因此 bundle 的大小相对较小 （~ 23Kb）。该代码可在 [GitHub](https://github.com/jw-12138/cwgi-cli) 上找到.


## 如何使用

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

<details><summary>ES module version

</summary>

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

## 选项

```ts
interface CWGI_Options {
  owner: string,
  repo: string,
  clientId: string,
  darkMode?: boolean,
  proxy?: string,
  reactions?: boolean,
  remoteMarkdownRendering?: boolean,
  markdownRenderingEndpoint?: string
}

declare function init(githubIssueId: number, options: CWGI_Options)
```

- `githubIssueId`, _必需_, 要显示Github Issue的 ID.
- Options:
  - `owner`, _必需_, 仓库的所有者.
  - `repo`, _必需_, 存储库名称.
  - `clientId`, _必需_, GitHub 应用程序的客户端 ID.
  - `darkMode`, 可选, 是否使用深色模式，设置为 `undefined` 以使用自动深色模式 （prefers-color-scheme），设置为 `true` 以强制执行深色模式，反之亦然.
  - `proxy`, 可选，之前部署的 Cloudflare worker 的 URL，如果不指定，所有请求都会直接发送到 GitHub API.
  - `reactions`, 可选, 设置false为禁用反应，这可以为您节省一些（实际上很多）对 GitHub API 的请求. 
  - `remoteMarkdownRendering`, 可选, 默认为`true`,设置`false`为禁用远程 markdown 渲染.
  - `markdownRenderingEndpoint`, 可选, 设置此 URL 以覆盖 Markdown 渲染的默认端点。端点应遵循以下规则:
    
    **请求**:

    ```http
    POST /
    Content-Type: text/plain
    
    hello world!
    ```

    **响应**:
    
    ```http
    Content-Type: text/plain

    <p>hello world</p>
    ```


## 在 SPA 中使用

`init` 当路由改变时只需再次调用该函数，该函数将自动删除前一个实例并创建一个新的实例。

```js
// router.js
import {init} from 'cwgi'
import {useRoute} from 'vue-router'

const route = useRoute()

route.afterEach(() => {
  init()
})
```

## 程序化暗黑模式

就像在 SPA 中一样，您可以使用选项调用该 `init` 函数 `darkMode`.

```js
// index.js
import {init} from 'cwgi'

init(1, {darkMode: true})
```

## 自行构建捆绑包

1. Fork 仓库: [jw-12138/cwgi-cli](https://github.com/jw-12138/cwgi-cli)
2. 转到 Cloudflare 仪表板-> Workers & Pages ->创建，切换到页面选项卡，然后单击 `Connect to Git`.
3. 选择您刚刚分叉的存储库（应命名为 `cwgi-cli` ），然后单击 `Begin Setup`.
4. 选择 `Vue` 作为框架预设（虽然代码是用 Solid.js 编写的），然后单击 `Save and Deploy`.

部署完成后，您应该能够获得类似的 URL `https://cwgi-cli.workers.dev`，并且您可以用这个 URL 替换预建包中的 URL.

另外，请记住为该工作者设置一个自定义域，以便在中国大陆使用它.


就这样，您已经涵盖了几乎所有内容，评论系统应该能够毫无问题地运行!

