/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';
import Head from './head';
import Nav from './nav';
import Title from './title';

const Header = ({ path, pageTitle, ogImage }) => {
  return (
    <React.Fragment>
      <Head title={pageTitle} ogImage={ogImage} />

      <header css={{
        padding: '1em 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Title path={path} />
        <Nav />
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  path: PropTypes.string,
  pageTitle: PropTypes.string,
  ogImage: PropTypes.string
};

export default Header;
