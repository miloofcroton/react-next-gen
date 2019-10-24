/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

const Container = ({ children }) => (
  <React.Fragment>
    <div css={{
      maxWidth: '45rem',
      margin: '0 auto',
      padding: '0 1em',
    }}>
      {children}
    </div>
  </React.Fragment>
);

export default Container;
