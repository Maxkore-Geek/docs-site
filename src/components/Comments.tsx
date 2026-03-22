import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

interface CommentsProps {
  mapping?: 'pathname' | 'url' | 'title' | 'og:title';
}

export default function Comments({ mapping = 'pathname' }: CommentsProps) {
  const { colorMode } = useColorMode();
  const theme = colorMode === 'dark' ? 'dark_dimmed' : 'light';

  return (
    <div className="margin-top--lg">
      <Giscus
        repo="Maxkore-Geek/docs-site"
        repoId="R_kgDORbCQcg"
        category="Announcements"
        categoryId="DIC_kwDORbCQcs4C4hEd"
        mapping={mapping}
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme}
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
}
