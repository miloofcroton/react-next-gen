/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import Link from 'next/link';
import { siteMeta } from '../../../../../blog.config';

const Title = ({ path }) => (
  <React.Fragment>
    {path === '/'
      ? (
        <h1 css={{
          marginTop: 0
        }}>
          <a
            href={siteMeta.siteUrl}
            css={{
              color: '#333',
              textDecoration: 'none',
            }}
          >
            {siteMeta.title}
          </a>
        </h1>
      )
      : (
      <p css={{
        fontSize: '1.3em',
        fontWeight: 'bold',
      }}>
        <Link href="/">
          <a
            rel="me"
            css={{
              color: '#333',
              textDecoration: 'none',
            }}
          >
            {siteMeta.title}
          </a>
        </Link>
      </p>
      )
    }
  </React.Fragment>
);

export default Title;
