import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from './Nav';

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Nav />

      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/blog/story">
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
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
