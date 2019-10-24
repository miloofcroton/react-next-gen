/** @jsx jsx */
import { jsx } from '@emotion/core';
// import React from 'react';
import Link from 'next/link';
import PublishedAt from '../../utils/published-at';

const Post = ({ title, summary, date, path }) => (
  <article css={{
    marginBottom: '2em'
  }}>
    <header>
      <h2>
        <Link href={path}>
          <a css={{ textDecoration: 'none' }}>{title}</a>
        </Link>
      </h2>

      <PublishedAt link={path} date={date} />
    </header>
    <div css={{
      label: 'post-summary',
      marginTop: '1em'
    }}>
      {summary}
    </div>
  </article>
);

export default Post;
