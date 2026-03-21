---
title: Maxkore's Geek Space · User Guide
description: Master your personal geek space from scratch
date: 2026-03-01
author: Maxkore
tags: [Guide, Tutorial, Getting Started]
---

# Maxkore's Geek Space · User Guide

Congratulations on successfully launching your personal geek space! This article will guide you through how to use and maintain your website.

---

## 1. Project Structure

Your website mainly consists of the following directories:

- `blog/` - Where blog posts are stored
- `docs/` - Where documentation/tutorials are stored
- `src/` - Source code (generally leave this untouched)
- `static/` - Static assets like images

---

## 2. Writing Blog Posts

### 2.1 Creating a New Blog Post

Create a file in the `blog/` directory, named with the format: `YYYY-MM-DD-title.md`

Example: `2026-03-02-Learning-Notes.md`

### 2.2 Blog File Template

```markdown
---
title: Article Title
description: Brief description
date: 2026-03-02
author: Maxkore
tags: [tag1, tag2]
---

# Article Title

This is where the main content goes...

## Subheading

- List item 1
- List item 2

> Quote

**Bold text** *Italic text*
```

### 2.3 Accessing Blog Posts

- Blog list page: `https://docs-site.bbroot.com/blog`
- Single post: `https://docs-site.bbroot.com/blog/2026/03/02/article-title`

---

## 3. Writing Technical Documentation

### 3.1 Creating New Documentation

Create a `.md` file in the `docs/` directory, for example: `quick-start.md`

### 3.2 Documentation File Template

```markdown
---
title: Quick Start
description: Get started in 5 minutes
sidebar_position: 1
---

# Quick Start

This is where the documentation content goes...

## Installation Steps

1. Step one
2. Step two
3. Step three

## Code Example

\```javascript
function hello() {
  console.log('Hello Maxkore!');
}
\```
```

### 3.3 Accessing Documentation

- Documentation home page: `https://docs-site.bbroot.com/docs`
- Single document: `https://docs-site.bbroot.com/docs/quick-start`

---

## 4. Daily Workflow

### 4.1 Local Development (Optional)

```bash
npm start
# Access http://localhost:3000
```

### 4.2 Submitting Updates (Core)

After writing content, just three steps:

```bash
git add .
git commit -m "Describe what you updated"
git push
```

Wait 2-3 minutes, the website updates automatically!

### 4.3 Common Git Commands

| Command                | Action                        |
| ---------------------- | ----------------------------- |
| `git status`           | Check which files are modified|
| `git add .`            | Add all changes               |
| `git commit -m "msg"`  | Commit changes                |
| `git push`             | Push to GitHub (auto-deploys) |

---

## 5. Common Markdown Syntax

### 5.1 Headings

```markdown
# Heading 1
## Heading 2
### Heading 3
```
#### **Rendered:**
  # Heading 1
  ## Heading 2
  ### Heading 3

### 5.2 Lists

```markdown
- Unordered list item 1
- Unordered list item 2

1. Ordered list item 1
2. Ordered list item 2
```
#### **Rendered:**
  - Unordered list item 1
  - Unordered list item 2

  1. Ordered list item 1
  2. Ordered list item 2

### 5.3 Links and Images

```markdown
[Link text](https://example.com)

![Image description](/img/image.png)
```

### 5.4 Code Blocks
~~~none
\```language
content
\```
~~~
#### **Rendered:**
\```
This is a code block
\```

### 5.5 Admonitions

```markdown
:::tip
This is a tip
:::

:::warning
This is a warning
:::

:::danger
This is a danger notice
:::

:::info
This is an info notice
:::

:::note
This is a general note
:::
```
#### **Rendered:**
  :::tip
  This is a tip
  :::

  :::warning
  This is a warning
  :::

  :::danger
  This is a danger notice
  :::

  :::info
  This is an info notice
  :::

  :::note
  This is a general note
  :::

### 5.6 Tables
```markdown
| Header 1                 | Header 2 |
| ------------------------ | -------- |
| Content 1                | Content 2|
| Content 3                | Content 4|
```
#### **Rendered:**
| Header 1                 | Header 2 |
| ------------------------ | -------- |
| Content 1                | Content 2|
| Content 3                | Content 4|

## 6. Frequently Asked Questions

### Q1: Website didn't update after changes?

Check three things:

1. Did you run `git push`
2. Check GitHub Actions status: `https://github.com/Maxkore-Geek/docs-site/actions`
3. Wait 2-3 minutes for cache refresh

### Q2: How to change the website's theme color?

Edit `src/css/custom.css`:

```css
:root {
  --ifm-color-primary: #6366f1;  /* Change to your preferred color */
}
```

### Q3: How to change the website's favicon?

Replace the `static/img/favicon.ico` file.

### Q4: How to delete a page?

Simply delete the corresponding `.md` file directly on GitHub.

## 7. Advanced Features

### 7.1 Document Categorization

Create folders under `docs/`, for example:

text

```
docs/
├── getting-started/
│   ├── lesson-1.md
│   └── lesson-2.md
└── advanced/
    └── advanced-topic.md
```

Create a `_category_.json` in each folder:

json

```
{
  "label": "Getting Started",
  "position": 1
}
```

### 7.2 Adding Search Functionality

Register for [Algolia DocSearch](https://docsearch.algolia.com/), then configure it in `docusaurus.config.ts`.

### 7.3 Custom Pages

Create a `.tsx` file under `src/pages/`, for example `about.tsx`:

tsx

```
import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About" description="About this site">
      <div style={{ padding: '2rem' }}>
        <h1>About This Site</h1>
        <p>This is Maxkore's personal geek space.</p>
      </div>
    </Layout>
  );
}
```

Access: `https://docs-site.bbroot.com/about`

## 8. Summary

Remember the core workflow:

bash

```
git add .
git commit -m "Update description"
git push
```

**That's it! If you have any questions, feel free to ask in the blog comments or on GitHub Issues.**
