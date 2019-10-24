/** @jsx jsx */
import { jsx } from '@emotion/core';
// import React from 'react';
import Link from 'next/link';
import { siteMeta } from '../../../../../../site.config';
import PublishedAt from '../../published-at';
import blogposts from '../../../../../services/blog/data/posts';
import Layout from '../../../../../style/layouts/main';
import SyntaxHighlight from './syntax-highlight';
import NextPrevPost from './next-prev-post';

const BlogPost = ({ path, meta, children }) => {
  const currentPostIndex = blogposts
    .map(({ title }) => title)
    .indexOf(meta.title);
  const previousPost = blogposts[currentPostIndex + 1];
  const nextPost = blogposts[currentPostIndex - 1];

  return (
    <Layout pageTitle={meta.title} ogImage={meta.image}>
      <SyntaxHighlight />
      <article className="h-entry" css={{
        marginBottom: '2em'
      }}>
        <header css={{
          marginBottom: '2em'
        }}>
          <h1 className="p-name">{meta.title}</h1>

          <div>
            <PublishedAt date={meta.publishedAt} link={path} />

            <Link href="/about/me">
              <a
                css={{
                  marginLeft: '1em'
                }}
                color="#aaa"
                className="p-author h-card"
                href="/about/me"
              >
                {siteMeta.author}
              </a>
            </Link>
          </div>
        </header>
        <div className="e-content">{children}</div>
        <footer css={{
          marginTop: '2em'
        }}>
          {(previousPost || nextPost) && (
            <div css={{
              label: 'post-pagination',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
            }}>
              {previousPost && (
                <NextPrevPost
                  title={previousPost.title}
                  path={previousPost.path}
                  position="previous"
                />
              )}
              {nextPost && (
                <NextPrevPost
                  title={nextPost.title}
                  path={nextPost.path}
                  position="next"
                />
              )}
            </div>
          )}
        </footer>
      </article>
    </Layout>
  );
};

export default BlogPost;
