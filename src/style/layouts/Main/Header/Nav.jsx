/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import Link from 'next/link';

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT', key: '' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub', key: '' },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => {

  /*
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
  */
  return (

    <React.Fragment>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {links.map(({ key, href, label }) => (
            <li key={key}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about/me">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/blog">
          <a>Blog</a>
        </Link>{' '}
        |{' '}
        <Link href="/cars">
          <a>Cars</a>
        </Link>{' '}
        |{' '}
        <Link href="/clock">
          <a>Clock</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users</a>
        </Link>
        |{' '}
        <Link href="/auth/login">
          <a>Login</a>
        </Link>{' '}
      </nav>
    </React.Fragment>
  );
};

export default Nav;
