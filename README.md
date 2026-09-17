# Siyao Yang | 杨斯尧 — GitHub Pages 个人学术主页

这是从现有 Google Sites 内容重建的静态网站，包含首页、论文页和教学页。不要求安装 Node.js、Ruby、Jekyll 或其他构建工具。

网站地址：https://yangsiyao.github.io/ 。源代码：https://github.com/YangSiyao/YangSiyao.github.io 。本包不包含账号凭据。

## 1. 本地预览

解压压缩包后，双击 `index.html` 即可在浏览器中查看；顶部导航可以打开另外两个页面。请保持 `assets` 文件夹与三个 HTML 文件的相对位置不变。

论文页展示预印本和已发表论文；全部论文、站内导航及外部链接无需 JavaScript 即可阅读和使用。

## 2. 在其他 GitHub 账户发布副本（网页操作）

### 第一步：创建仓库

登录你自己的 GitHub 账户，点击 **New repository**。

仓库名称填写：

```text
你的GitHub用户名.github.io
```

必须用实际 GitHub 用户名替换中文部分，不能使用显示姓名代替。例如，**仅作示例**：用户名为 `example-user` 时，仓库名为 `example-user.github.io`。

选择 **Public**，然后创建仓库。免费个人账户可用公开仓库发布 Pages。网站内容会公开；不要上传未公开的学生信息、私人文件或凭据。

如果你已经有同名仓库，请不要直接覆盖已有网站；先备份并检查现有内容。也可另建项目仓库，例如 `academic-homepage`，对应地址形式为 `https://你的用户名.github.io/academic-homepage/`。本网站的相对路径兼容这两种情况。

### 第二步：上传解压后的文件

进入仓库，在空仓库页面使用 **uploading an existing file**，或在已有仓库使用 **Add file → Upload files**。

上传解压后文件夹**里面的内容**，不要上传 ZIP 本身，也不要把最外层文件夹整体嵌套到仓库中。仓库根目录应是：

```text
index.html
publications.html
teaching.html
assets/
    site.css
    favicon.svg
    siyaoyang.JPG
.nojekyll
README.md
MIGRATION.md
```

`README.md` 和 `MIGRATION.md` 是说明文件，不参与网站显示；可以保留，也可以不上传。

`.nojekyll` 是一个空的隐藏文件，用来关闭不需要的 Jekyll 处理。在 macOS Finder 中按 **Command + Shift + .** 可以显示隐藏文件。

填写提交说明，例如 `Add academic homepage`，然后点击 **Commit changes**。

### 第三步：启用 Pages

在该仓库中依次打开：

```text
Settings → Pages → Build and deployment
```

设置：

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

点击 **Save**。如果你的默认分支不是 `main`，选择实际上传文件的分支。

页面部署完成后，通过 Pages 设置中的 **Visit site** 查看正式地址。部署状态可在仓库的 **Actions** 标签中查看。

个人主页地址形式为：

```text
https://你的GitHub用户名.github.io/
```

如果尚未成功部署，这个地址不会因为创建了文件就自动成为可访问网站。

### 第四步：验证后再用于招生广告

在电脑和手机上检查首页、论文和教学栏目。也请使用实际中国大陆网络测试访问效果，再替换招生广告里的原主页地址。

这个版本的 HTML 和样式不依赖 Google 服务或外部 CDN；但没有在中国大陆网络中实测 GitHub Pages 的可达性，不能把“移除了 Google 依赖”等同于“所有网络下都能访问”。点击论文和机构链接后，外部网站仍需要自己的网络连接。

## 3. 后续更新

### 修改文字、添加论文或课程

- 个人介绍、教育和工作经历：编辑 `index.html`。
- 论文：编辑 `publications.html`，参照相邻的 `<li class="publication">` 条目添加。
- 课程：编辑 `teaching.html`，参照相邻的 `<article class="course">` 条目添加。
- 字体、颜色、间距、手机排版：编辑 `assets/site.css`。

个人信息侧栏仅在首页。更换侧栏中的邮箱、职位、单位或照片时，修改 `index.html`；如需更改页眉或页脚信息，请同步修改三个页面。

可以直接使用 GitHub 网页中的编辑按钮修改文件并提交。已启用按分支发布后，后续提交会触发站点更新。

### 更换个人照片

首页侧栏使用 `assets/siyaoyang.JPG`。更换照片时，可以用同名文件替换；若使用不同文件名，请修改 `index.html` 中的 `src`。发布时请一同上传照片文件。

## 4. 常见问题

**发布后显示 README，而不是网页？**
确认 `index.html` 在 Pages 选定的分支和发布目录的顶层，不在额外的子文件夹中。

**网页只有文字，没有样式？**
确认 `assets/site.css` 已上传，文件名大小写完全一致，且 `assets` 与 `index.html` 在同一层级。

**显示 404？**
检查仓库名称、Pages 分支及目录设置，并查看 Actions 中的部署是否成功。项目网站的地址需要包含项目仓库名。

**修改 Google Sites 后，这里会同步更新吗？**
不会。这是独立静态网站，不是嵌入原网页，也没有自动同步功能。后续请编辑此仓库中的文件。

**原 Google Sites 会被删除吗？**
不会。本次重建没有修改或删除原站。

## 官方说明

- GitHub Pages 创建站点：https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- 发布源设置：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- GitHub Pages 简介与网址规则：https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

内容来源、迁移范围和未完成事项见 `MIGRATION.md`。
