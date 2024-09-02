---
title: '服务端配置'
---

# 服务端配置

::: tip 原文转载自：[cwgi-docs](https://cwgi-docs.jw1.dev/) by [jw-12138](https://github.com/jw-12138)
:::

服务器端完全基于 Cloudflare Workers 构建，因此您无需为服务器付费，代码可在 [GitHub](https://github.com/jw-12138/cwgi-api) 上找到。不需要完成此步骤，但您可能会遇到一些问题：

- 当用户未登录时，对 GitHub API 的访问受到限制，这意味着**用户在加载评论时可能会被阻止**.
- 评论系统将使用 GitHub 的 Markdown 渲染 API，这将进一步增加当前小时内的**请求消耗**.
- **隐私**，使用我的回调 URL 可以使我看到登录尝试、GitHub 回调代码和用户令牌。但是，我尊重您的隐私，不会滥用这些信息.

为了获得完全控制和增强隐私，我建议部署您自己的 Cloudflare Worker.

## 前提

1. Cloudflare 账号
2. Node.js (version >= 18.0)
3. [Bun](https://bun.sh) (version >= 1.1) (可选)

## 端点

1. `* /proxy/:link{.*}`, 此端点用于将请求代理到 GitHub API，并且可以实现一定程度的缓存.
2. `POST /markdown`, 此端点用于将 Markdown 内容呈现为 HTML.
3. `GET /callback`, 此终端节点用于接收来自 GitHub 的消息，就像前面提到的那样，部署此 worker 时，您可以将回调 URL 设置为此终端节点.

## 如何使用

1. 克隆存储库

   ```bash
   # 建议使用 Fork 进行进一步的更新和部署
   git clone https://github.com/jw-12138/cwgi-api.git
   ```

2. 安装依赖项

   ```bash
   # bun 速度极快的 ⚡️
   # 你可以按照自己的喜好使用 npm，pnpm 或 yarn
   bun install 
   ```

3. 编辑 `wrangler.toml`

    ```toml
    # wrangler.toml
    name = "cwgi-api"
    main = "index.ts"
    compatibility_date = "2023-06-13"

    [vars]
    SITE_URL = ""
    ALLOWED_ORIGINS = ""
    ```
  
    - `SITE_URL`, _REQUIRED_, 您博客的 URL，否则 CORS 策略将阻止来自您博客的请求.
    - `ALLOWED_ORIGINS`, CORS 允许的源（可选），您可以根据需要添加任意数量的源，用逗号、分隔，使用 * 允许所有源.

4. 部署

   ```bash
   bun run deploy
   ```

5. 在 Cloudflare Workers 仪表板中编辑环境密钥

   ![](https://blog-r2.jw1.dev/Zjequ8swKA3ZxBNI.webp)

   需要 3 个 secret，1 个 secret 可选:

   - `GH_APP_ID`, **必需**,GitHub应用 ID.
   - `GH_APP_CLIENT_ID`, **必需**, GitHub 应用程序客户端 ID.
   - `GH_APP_CLIENT_SECRET`, **必需**, GitHub 应用程序客户端密钥.
   - `GITHUB_TOKEN`,API 对未经身份验证的请求有 60 个 RPH（每小时请求数）的速率限制，您可以将此密钥设置为[个人访问令牌](https://github.com/settings/tokens?type=beta)，以将速率限制增加到 5000 RPH.

6. 重新部署 worker

现在 worker 应该已启动并正在运行，您可以将回调 URL 设置为`https://your-worker-name.workers.dev/callback`.

## 创建个人访问令牌

转到[此页面](https://github.com/settings/tokens?type=beta)并创建一个访问令牌，将 GITHUB_TOKEN 设置为此令牌，这可以将速率限制提高到 5000 RPH，从而获得更好的客户体验.

GitHub 为 个人访问令牌 提供 2 个选项：fine-grained 和 classic。两者都是合适的，并且需要在此项目中使用 public repo 权限.

## 设置自定义域

默认情况下，Worker URL 应该可以立即工作，除非你希望 URL 干净一点，或者你住在中国（或者可能其他国家）。不幸的是，域名 workers.dev 在中国被阻止，因此我们需要设置一个自定义域。

转到您的 Worker 页面，单击“设置”-> “触发器”，您将看到一个自定义域部分，单击“添加自定义域”按钮。输入域名，等待几分钟，就是这样！请记住，还要在 GitHub 应用程序设置中更新回调 URL。




