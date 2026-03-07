import React from 'react';
import BlogArchivePage from '@theme-original/BlogArchivePage';
import type BlogArchivePageType from '@theme/BlogArchivePage';
import type {WrapperProps} from '@docusaurus/types';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type Props = WrapperProps<typeof BlogArchivePageType>;

export default function BlogArchivePageWrapper(props: Props): JSX.Element {
  return (
    <>
      <nav className={styles.breadcrumbs} aria-label="面包屑">
        <ol className={styles.breadcrumbsList}>
          <li className={styles.breadcrumbsItem}>
            <Link to="/">首页</Link>
          </li>
          <li className={styles.breadcrumbsItem}>
            <Link to="/blog">博客</Link>
          </li>
          <li className={styles.breadcrumbsItemActive}>
            <span>归档</span>
          </li>
        </ol>
      </nav>
      
      <BlogArchivePage {...props} />
    </>
  );
}