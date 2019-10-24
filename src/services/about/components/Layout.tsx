/** @jsx jsx */
import { jsx } from '@emotion/core';

// import React from 'react';
import DefaultLayout from '../../../style/layouts/default';

const Page = ({ meta, children }) => {
  return (
    <DefaultLayout pageTitle={meta.title}>
      <article>
        <header css={{
          marginBottom: '2em'
        }}>
          <h1>{meta.title}</h1>
        </header>
        <div>{children}</div>
      </article>
    </DefaultLayout>
  );
};

export default Page;
