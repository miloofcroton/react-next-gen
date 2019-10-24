/** @jsx jsx */
import { jsx } from '@emotion/core';
// import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <nav css={{
    display: 'flex',
    '& a:not(:last-child)': {
      marginRight: '1em',
    }
  }}>
    <Link href="/about/me">
      <a>About</a>
    </Link>
  </nav>
);

export default Nav;
