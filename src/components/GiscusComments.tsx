import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComments() {
  const { colorMode } = useColorMode();
  const theme = colorMode === 'dark' ? 'dark_dimmed' : 'light';

  // ✅ 验证配置是否存在
  const repoId = "R_kgDORbCQcg";
  const categoryId = "DIC_kwDORbCQcs4C4hEd";
  
  if (!repoId || !categoryId) {
    console.error('Giscus评论：缺少 repoId 或 categoryId');
    return null;
  }

  return (
    <BrowserOnly fallback={<div>加载评论中...</div>}>
      {() => (
        <div className="margin-top--lg">
          <Giscus
            id="comments"
            repo="Maxkore-Geek/docs-site"
            repoId={repoId}
            category="Announcements"
            categoryId={categoryId}
            mapping="pathname"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="1"
            inputPosition="top"
            theme={theme}
            lang="zh-CN"
            loading="lazy"
          />
        </div>
      )}
    </BrowserOnly>
  );
}