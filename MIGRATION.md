# 迁移记录

读取日期：2026-09-16。

## 内容来源

本网站主体仅按以下三个已读取的原站页面重建：

1. Home：https://sites.google.com/view/siyao-yang
2. Publications：https://sites.google.com/view/siyao-yang/publications
3. Teaching：https://sites.google.com/view/siyao-yang/teaching

## 已迁移

- 首页：姓名、原站英文职位和单位、邮箱、办公室地址、个人介绍、三项研究方向、两条教育经历、三条工作经历。
- 论文页：2 篇预印本、12 篇已发表论文；保留原站分组、顺序、编号、标题、合作者表述、刊物信息、年份及发表状态。
- 教学页当前保留 UCAS 的 1 条授课记录和 UChicago 的 8 条授课记录；NUS 的 6 条助教记录已按要求移除。
- 本地导航、手机排版、无需 JavaScript 即可阅读的静态内容。

原站中的异常空格（例如年份内部空格、期刊名内部空格）及不规则标点做了排版整理；没有用其他履历信息覆盖原站。论文作者已按论文原文顺序列出；仅在论文或作者资料明确标注，或作者本人确认时添加通讯作者星号。原站尚列为 Preprint 的论文仍保留该状态。

## 链接处理

- arXiv 链接统一使用 `https://arxiv.org/abs/编号`，而不是把 PDF 嵌入网页或从 Google 加载。
- 原站第 [7] 篇已发表论文标题的 Google Scholar 链接改为该论文的 arXiv 入口。
- 原站第 [1] 篇已发表论文的 SIAM 出版社链接保留。
- 机构和导师的公共主页链接保留或恢复。
- 原站中以下三个 arXiv 跳转未直接取出，通过同名、同作者的 arXiv 条目恢复对应入口：
  - Flows between parallel plates：`2010.03434`。
  - Inchworm Monte Carlo method for open quantum systems：`1811.08044`。
  - Analysis of the residual-type ...：`1702.04048`。
- 没有下载论文 PDF，论文链接仍指向第三方网站。

## 未迁移或未验证

- 原站照片未能成功下载；仅首页侧栏使用本人提供的 `assets/siyaoyang.JPG`，论文页和教学页不显示个人信息侧栏。
- Google Sites 编辑器功能、站内搜索、统计代码、页脚系统控件没有复制。
- 本包覆盖上面三个成功读取的页面；未声称复制了任何不可见、未公开或未成功读取的其他页面与附件。
- 初次迁移时尚未发布；网站现托管于 https://yangsiyao.github.io/ ，源代码位于 https://github.com/YangSiyao/YangSiyao.github.io 。
- 没有实测中国大陆网络下的访问效果，也没有逐一验证所有外部机构/导师网页的可达性。
- 没有修改或删除原 Google Sites，也没有设置其重定向。
- 没有添加未经确认的招生名额、申请截止日期或奖助学金承诺。

## 技术说明

网站使用静态 HTML 和一个本地 CSS 文件。没有外部字体、分析服务、CDN、数据库、API 请求或第三方图片依赖。代码可直接发布到 GitHub Pages，也可交给其他支持静态文件的托管环境。

字体名称只是 CSS 字体栈，不附带或分发任何字体文件。

## 本地检查

此前在离线 Chromium 渲染中检查了三个页面的 1440 像素电脑视图和 390 像素手机视图，未发现横向溢出。14 条论文均为静态 HTML。已检查各 HTML 引用的本地文件确实存在。

上述浏览器测试使用了内联本地 CSS 的离线页面副本。GitHub Pages 的发布网址和托管响应需在每次更新后检查；中国大陆网络下的访问效果仍需另行验证。
