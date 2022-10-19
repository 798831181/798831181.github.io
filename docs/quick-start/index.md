# Quick Start

## github pages

Websites for you and your projects.

Hosted directly from your GitHub repository. Just edit, push, and your changes are live

### 使用步骤

1. 创建一个名为username.github.io的仓库
2. 在仓库根目录下新建index.html文件

```html
<!DOCTYPE html>
<html>
<body>
<h1>Hello World</h1>
<p>I'm hosted with GitHub Pages.</p>
</body>
</html>

```
3. 提交并推送到远端
4. 打开浏览器，访问https://username.github.io


## vitePress

刚才通过创建简单的index.html文件演示了github Pages的使用。这种构建站点的方式比较原生，现在有大量的静态站点生成器可以帮助我们快速创建站点，vitePress就是其中一种。

### vietPress介绍

> Vite & Vue powered static site generator. Simple, powerful and performant. Meet the modern SSG framework you've always wanted.

## 使用自定义的GitHub Actions工作流进行发布

### 新建gh-pages分支

### 新建actions配置文件

在工程根目录下新建.github/workfolws/deploy.yml文件。

```
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: npm
      - run: npm install --frozen-lockfile

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist

```

