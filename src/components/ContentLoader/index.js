import React from 'react';

import { Spinner } from 'react-bootstrap';

const ContentLoader = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        maxHeight: '100vh',
        backgroundColor: 'rgba(255, 255, 255, .15)',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(5px)',
        zIndex:999
      }}
    >
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default ContentLoader;
