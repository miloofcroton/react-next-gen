/** @jsx jsx */
import { jsx } from '@emotion/core';

// import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { NextPage } from 'next';

import Button from '@material-ui/core/Button';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js Starter">
      <h1 css={{ color: 'steelblue' }}>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <Button variant="contained" color="primary">
        Material UI enabled
      </Button>
    </Layout>
  );
};

export default IndexPage;
