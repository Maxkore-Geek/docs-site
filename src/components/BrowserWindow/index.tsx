import React from 'react';
import styles from './styles.module.css';

interface Props {
  children: React.ReactNode;
  minHeight?: number;
  url?: string;
}

export default function BrowserWindow({ children, minHeight = 300, url = 'https://example.com' }: Props) {
  return (
    <div className={styles.browserWindow} style={{ minHeight }}>
      <div className={styles.browserWindowHeader}>
        <div className={styles.buttons}>
          <span className={styles.dot} style={{ background: '#f25f58' }} />
          <span className={styles.dot} style={{ background: '#fbbe3c' }} />
          <span className={styles.dot} style={{ background: '#58cb42' }} />
        </div>
        <div className={styles.browserWindowAddressBar}>{url}</div>
        <div className={styles.browserWindowMenuIcon}>
          <div><span className={styles.dropdownIcon}>⌄</span></div>
        </div>
      </div>
      <div className={styles.browserWindowBody}>
        {children}
      </div>
    </div>
  );
}
