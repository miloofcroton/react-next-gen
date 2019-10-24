/** @jsx jsx */
import { jsx } from '@emotion/core';

// import React from 'react';
import Layout from '../default';

const Page = ({ meta, children }) => {
  return (
    <Layout pageTitle={meta.title}>
      <article>
        <header css={{
          marginBottom: '2em'
        }}>
          <h1>{meta.title}</h1>
        </header>
        <div>{children}</div>
      </article>
    </Layout>
  );
};

export default Page;
