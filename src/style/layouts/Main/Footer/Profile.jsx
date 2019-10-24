/** @jsx jsx */
import { jsx } from '@emotion/core';
// import React from 'react';
import { siteMeta } from '../../../../../blog.config';

const Profile = () => (
  <div className="h-card" css={{
    label: 'profile',
    display: 'flex',
    alignItems: 'center',
    padding: '1em',
    backgroundColor: '#eee',
  }}>
    <img
      className="u-photo"
      css={{
        width: '5em',
        height: '5em',
        marginRight: '0.5em',
      }}
      src="/static/avatar.png"
      alt={siteMeta.author}
    />

    <div>
      <p>
        Hi, I'm{' '}
        <a className="u-url p-name" href={siteMeta.siteUrl} rel="me">
          {siteMeta.author}
        </a>
      </p>
      <p className="p-note" css={{
        marginBottom: 0,
      }}>
        I'm a frontend developer &amp; web standards enthusiastic.
      </p>
    </div>
  </div>
);

export default Profile;
