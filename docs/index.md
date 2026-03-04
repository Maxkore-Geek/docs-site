---
title: '⚡ Maxkore · 文档库'
description: '代码之外 | 思考之上'
sidebar_label: '⎈ 核心节点'
sidebar_position: 0
image: /img/og-image.jpg
hide_table_of_contents: true
---

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# 📚 Maxkore 知识库

<div className="hero-section">
  <p className="hero-tagline">代码之外，思考之上 · 文档与教程中心</p>
  <div className="hero-stats">
    <span>📄 累计文档 <strong>3</strong> 篇</span>
    <span>📁 分类 <strong>2</strong> 个</span>
    <span>🕒 最后更新 <strong>2026-03-04</strong></span>
  </div>
</div>

---

## ✨ 快速导航

<div className="quick-nav">
  <a href="/blog" className="nav-card">
    <div className="nav-icon">📝</div>
    <div className="nav-content">
      <h3>技术博客</h3>
      <p>编程心得 · 技术思考 · 踩坑记录</p>
    </div>
  </a>
  <a href="/docs/category/tutorial-basics" className="nav-card">
    <div className="nav-icon">📘</div>
    <div className="nav-content">
      <h3>基础教程</h3>
      <p>从零开始 · 循序渐进</p>
    </div>
  </a>
  <a href="/docs/category/tutorial-extras" className="nav-card">
    <div className="nav-icon">🚀</div>
    <div className="nav-content">
      <h3>进阶指南</h3>
      <p>深入原理 · 最佳实践</p>
    </div>
  </a>
  <a href="https://github.com/Maxkore-Geek" className="nav-card">
    <div className="nav-icon">💻</div>
    <div className="nav-content">
      <h3>GitHub</h3>
      <p>开源项目 · 代码仓库</p>
    </div>
  </a>
</div>

---

## 📖 最新文档

<div className="recent-docs">

{/* 这里会自动显示最近的文档卡片 */}
<DocCardList items={useCurrentSidebarCategory().items} />

</div>

---

## 📂 文档分类

<div className="category-grid">

{/* 这里可以手动列出主要分类 */}
<div className="category-card">
  <h3>📘 基础教程</h3>
  <p>适合初学者的入门指南</p>
  <ul>
    <li><a href="/docs/Welcome">👋 欢迎页面</a></li>
    <li><a href="/docs/intro">📖 快速入门</a></li>
  </ul>
</div>

<div className="category-card">
  <h3>🚀 进阶指南</h3>
  <p>深入技术细节</p>
  <ul>
    <li><a href="/docs/tutorial-extras/translate-your-site">🌍 多语言配置</a></li>
    <li><a href="/docs/tutorial-extras/manage-docs-versions">📌 文档版本管理</a></li>
  </ul>
</div>

<div className="category-card">
  <h3>💡 最佳实践</h3>
  <p>开发经验与技巧</p>
  <ul>
    <li><a href="/blog/2026/03/01/使用指南">📝 使用指南</a></li>
    <li>🚧 施工中...</li>
  </ul>
</div>

</div>

---

## 🔄 最近更新

<div className="update-timeline">

- **2026-03-04** - 新增 [👋 欢迎页面](/docs/Welcome)
- **2026-03-04** - 优化文档首页样式
- **2026-03-01** - 发布 [📝 使用指南](/blog/2026/03/01/使用指南)
- **2026-03-01** - 网站正式上线 🎉

</div>

---

## 📬 与我联系

<div className="contact-section">
  <a href="https://github.com/Maxkore-Geek" className="contact-link">GitHub</a>
  <span className="contact-sep">·</span>
  <a href="/blog" className="contact-link">博客</a>
  <span className="contact-sep">·</span>
  <a href="#" className="contact-link">关于</a>
</div>

---

<div className="footer-note">
  <p>✍️ 持续写作 · 始于 2026</p>
</div>
