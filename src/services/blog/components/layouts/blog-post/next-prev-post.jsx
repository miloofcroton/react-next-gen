/** @jsx jsx */
import { jsx } from '@emotion/core';
// import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const NextPrevPost = ({ title, path, position }) => {
  const isNext = position === 'next';
  return (
    <Link href={path}>
      <a css={{
        display: 'flex',
        flexDirection: 'column',
        ...(isNext ? {
          textAlign: 'right',
          gridColumn: '2 / 2',
        } : []),
      }}>
        <small>Read {position} post </small>
        {title}
      </a>
    </Link>
  );
};

NextPrevPost.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['next', 'previous'])
};

export default NextPrevPost;
