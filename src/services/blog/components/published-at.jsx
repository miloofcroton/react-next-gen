/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import Link from 'next/link';
import moment from 'moment';

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
            {moment(date, 'YYYY-MM-DD').format('MMMM do, YYYY')}
          </time>
        </a>
      </Link>
    </React.Fragment>
  );
};

export default PublishedAt;
