/** @jsx jsx */
import { jsx } from '@emotion/core';

// import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js Starter">
      <h1 css={{ color: 'steelblue' }}>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
