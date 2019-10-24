/** @jsx jsx */
import { jsx } from '@emotion/core';
// import React from 'react';
import Profile from './profile';

const Footer = () => {
  return (
    <footer css={{
      padding: '1em 0',
    }}>
      <Profile className="profile-footer" />

      <p css={{
        marginTop: '2em'
      }}>
        Proudly built with <a href="https://nextjs.org">Next.js</a> -{' '}
        <a href="/feed.json">RSS Feed</a>
      </p>
    </footer>
  );
};

export default Footer;
