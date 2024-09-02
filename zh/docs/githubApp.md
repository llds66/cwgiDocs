---
title: 'GitHubApp 配置'
lastUpdated: 2024-6-26T21:07:00+8:00
---

# GitHubApp 配置
::: tip 原文转载自：[cwgi-docs](https://cwgi-docs.jw1.dev/) by [jw-12138](https://github.com/jw-12138)
:::

为了使评论系统正常工作，我们需要一种机制来验证 GitHub 用户，在这个项目中，我们使用 [GitHub Apps](https://docs.github.com/en/apps).

## 创建一个Github App

转到 [github.com/settings/apps/new](https://github.com/settings/apps/new) 创建一个新的应用程序. 让我们专注于基本要点:

1. **GitHub App 名称**  
    
   给你的应用程序起个名字,这可能是最难的部分 🤡.
   
2. **主页网址**  
   
   你可以使用博客的URL填充它.

3. **回调URL**  
   
   如果你愿意,你可以使用我的: https://cwgi.jw1.dev/callback

   如果你像使用自己的Callback URL, [服务端配置](/zh/docs/server.html) 将向你展示如何配置后端来处理此回调.

4. **使用户授权令牌过期**  

   我们不需要使用户令牌过期，因此只需取消选中此令牌即可.

5. **Webhook**  
   
   另外，我们不需要这个，取消选中.

6. **权限**  
   
   我们只需要**读取和写入** Issue 的权限，Metadata 将自动变为**只读**.
   
7. **此Github App 可以安装在哪里?**  
   
   选择 _Only on this account_(仅在此账户上), 这应该是默认选项.

好了，现在单击 _Create GitHub App_(创建Github应用程序), 现在应该在您的帐户中创建一个新的 GitHub 应用程序.

## 私钥

创建应用后，您将看到以下消息:

![](https://blog-r2.jw1.dev/VbLVXlUXQfKutLPs.webp)

私钥是用来对 access token 进行签名的，这个功能跟 **过期用户token** 有关，我们刚刚取消勾选了这个选项。因此，我们需要做的就是生成私钥并忘记它.

## 安装应用程序

![](https://blog-r2.jw1.dev/wzJjRLrDjHk6l_v2.webp)

在左侧（我认为设计不好），选择 Install App，然后单击 Install 安装 按钮。您应该被引导至安装页面.

![](https://blog-r2.jw1.dev/YZnDBXa7Qo7HNB_U.webp)

在这个页面中，你可以进一步为你的应用程序配置权限，我建议你**只选择存储你的博客问题的代码库**.

![](https://blog-r2.jw1.dev/fe801QBVCFyTWRif.webp)


