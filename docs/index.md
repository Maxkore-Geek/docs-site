---
title: '⚡ Maxkore'
description: '代码之外 | 思考之上'
sidebar_label: '⎈ 核心节点'
sidebar_position: 0
hide_table_of_contents: true
---

import React from 'react';
import DocCardList from '@theme/DocCardList';
import {useDocsSidebar} from '@docusaurus/theme-common';
import {useAllDocsData} from '@docusaurus/plugin-content-docs/client';

# ⚡ MAXKORE · 知识矩阵

<div className="hero-section">
  <p className="hero-tagline">代码之外 | 思考之上</p>
  <div className="hero-stats">
    <StatsDisplay />
  </div>
</div>

---

## ✨ 快速导航

<div className="quick-nav">
  <a href="/blog" className="nav-card">
    <div className="nav-icon">📝</div>
    <div className="nav-content">
      <h3>技术博客</h3>
      <p>编程心得 · 技术思考</p>
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
  <RecentDocs />
</div>

---

## 📂 所有文档

<div className="all-docs">
  <DocCardList items={useDocsSidebar().items} />
</div>

---

<div className="footer-note">
  <p>✍️ 持续写作 · 始于 2026</p>
</div>

{/* ========== 自定义组件 ========== */}

function StatsDisplay() {
  const docsData = useAllDocsData();
  const docs = docsData.default?.versions[0]?.docs || [];
  
  const docCount = docs.length;
  
  const categories = new Set(
    docs
      .map(doc => doc.path.split('/').slice(0, -1).join('/'))
      .filter(path => path.includes('/category/'))
  );
  const categoryCount = categories.size;
  
  const lastUpdate = docs
    .map(doc => doc.lastUpdatedAt)
    .filter(Boolean)
    .sort((a, b) => b - a)[0];
  
  const lastUpdateDate = lastUpdate 
    ? new Date(lastUpdate * 1000).toISOString().split('T')[0]
    : '2026-03-04';

  return (
    <React.Fragment>
      <span>📄 累计文档 <strong>{docCount}</strong> 篇</span>
      <span>📁 分类 <strong>{categoryCount}</strong> 个</span>
      <span>🕒 最后更新 <strong>{lastUpdateDate}</strong></span>
    </React.Fragment>
  );
}

function RecentDocs() {
  const docsData = useAllDocsData();
  const docs = docsData.default?.versions[0]?.docs || [];
  
  const recentDocs = docs
    .filter(doc => doc.lastUpdatedAt)
    .sort((a, b) => b.lastUpdatedAt - a.lastUpdatedAt)
    .slice(0, 5);

  return (
    <div className="recent-list">
      {recentDocs.map(doc => (
        <a href={doc.path} key={doc.id} className="recent-item">
          <span className="recent-title">{doc.title}</span>
          <span className="recent-date">
            {new Date(doc.lastUpdatedAt * 1000).toISOString().split('T')[0]}
          </span>
        </a>
      ))}
    </div>
  );
}
