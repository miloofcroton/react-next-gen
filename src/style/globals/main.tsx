/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Global, css } from '@emotion/core';

const GlobalStyle = () => (
  <Global
    styles={(theme) => {

      return css`

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        html, body {
          box-sizing: border-box;
          width: 100%;
          max-width: 1900px;
          min-height: 100%;
          height: auto;
          /* margin: 0 auto; */
          margin: 0;
          padding: 0;
          background-color: grey;
          color: ${theme.colors.secondary};
          /* font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif; */
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
          font-size: 1rem;
        }

        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }

        /** Blog Stuff */
        h1,
        h2,
        h3,
        h4 {
          margin-bottom: 0.5rem;
          font-weight: bold;
          color: inherit;
          line-height: 1.25;
        }

        h1 {
          font-size: 2rem;
        }

        h2 {
          margin-top: 1rem;
          font-size: 1.8rem;
        }

        h3 {
          margin-top: 1.5rem;
          font-size: 1.5rem;
        }

        p {
          margin-top: 0;
          margin-bottom: 1rem;
        }

        ul,
        ol,
        dl {
          margin-top: 0;
          margin-bottom: 1rem;
        }

        a {
          color: #33e;
          cursor: pointer;
        }

        a:hover,
        a:focus {
          text-decoration: underline;
        }

        hr {
          position: relative;
          margin: 1.5em 0;
          border: 0;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #fff;
        }

        blockquote {
          padding: 0.5em 1em;
          margin: 0.8em 0;
          color: #555;
          border-left: 0.25em solid #ccc;
        }

        blockquote p:last-child {
          margin-bottom: 0;
        }

        pre code {
          font-size: 18px;
        }

        code {
          color: #fff;
        }

        .wrap {
          max-width: 38rem;
          margin-left: auto;
          margin-right: auto;
        }

        article img {
          max-width: 100%;
          height: auto;
        }
      `;
    }}
  />
);

export default GlobalStyle;
