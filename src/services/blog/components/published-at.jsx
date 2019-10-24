/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import Link from 'next/link';
import { parse, format } from 'date-fns';

const PublishedAt = (props) => {
  const { link, date } = props;

  return (
    <React.Fragment>
      <Link href={link}>
        <a
          href={link}
          className="u-url"
          mcolor="#aaa" {...props}
          css={{
            color: '#555',
            textDecoration: 'none',
          }}
        >
          <time className="dt-published">
            {format(parse(date, 'yyyy-MM-dd', new Date()), 'MMMM dd, yyyy')}
          </time>
        </a>
      </Link>
    </React.Fragment>
  );
};

export default PublishedAt;
