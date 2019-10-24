/** @jsx jsx */
import { jsx } from '@emotion/core';
// import React from 'react';
import Layout from 'style/Layout';
import Button from '@material-ui/core/Button';
import { NextPage } from 'next';

const cardStyles = {
  label: 'card',
  padding: '18px 18px 24px',
  width: '220px',
  textAlign: 'left' as const,
  textDecoration: 'none',
  color: '#434343',
  border: '1px solid #9b9b9b',

  '&:hover': {
    borderColor: '#067df7',
  },

  '& h3': {
    margin: '0',
    color: '#067df7',
    fontSize: '18px',
  },

  '& p': {
    margin: '0',
    padding: '12px 0 0',
    fontSize: '13px',
    color: '#333',
  }
};

const HomePage: NextPage = () => (
  <Layout title="Home | React: The Next(js) Generation">
    <div css={{
        label: 'hero',
        width: '100%',
        color: '#333',
    }}>
      <h1 css={{
          label: 'title',
          margin: '0',
          width: '100%',
          paddingTop: '80px',
          lineHeight: '1.15',
          fontSize: '48px',
          textAlign: 'center',
      }}>
        Welcome to Next.js!
      </h1>
      <p css={{
          label: 'description',
          textAlign: 'center',
      }}>
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

      <div css={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Button variant="contained" color="primary" css={{ alignSelf: 'center' }}>
          Material UI enabled
        </Button>
      </div>

      <div css={{
        label: 'row',
        maxWidth: '880px',
        margin: '80px auto 40px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
        <a
          css={cardStyles}
          href="https://nextjs.org/docs"
        >
          <h3>Documentation &rarr;</h3>
          <p>Learn more about Next.js in the documentation.</p>
        </a>
        <a
          css={cardStyles}
          href="https://nextjs.org/learn"
        >
          <h3>Next.js Learn &rarr;</h3>
          <p>Learn about Next.js by following an interactive tutorial!</p>
        </a>
        <a
          css={cardStyles}
          href="https://github.com/zeit/next.js/tree/master/examples"
        >
          <h3>Examples &rarr;</h3>
          <p>Find other example boilerplates on the Next.js GitHub.</p>
        </a>
      </div>
    </div>
  </Layout>
);

export default HomePage;
