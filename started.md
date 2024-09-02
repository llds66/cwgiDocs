---
title: Quickstart
---

# Quickstart

## Try it now
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

// you can use it just like this or download it to your project and import it
import {init} from 'https://cwgi-cli.jw1.dev/cwgi.js'

init()
```

</details>

## Detailed configuration

1. [GitHub App](/github-app) - _REQUIRED_, you need a GitHub App to authenticate users
2. [Server side](/server-side) - Optional, you need a back-end to handle GitHub API requests
3. [Client side](/client-side) - _PARTIAL_, you need to include the script and style in your blog