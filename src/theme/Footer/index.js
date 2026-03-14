import React from 'react';
import Footer from '@theme-original/Footer';
import EditThisPage from '@site/src/components/EditThisPage';

export default function FooterWrapper(props) {
  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <EditThisPage />
      </div>
      <Footer {...props} />
    </>
  );
}
