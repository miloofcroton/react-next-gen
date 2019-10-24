/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Global, css } from '@emotion/core';

const GlobalStyle = () => (
  <Global
    styles={(theme) => {

      return css`
        * {
          box-sizing: border-box;
        }

        html, body {
          width: 100%;
          max-width: 1900px;
          min-height: 100%;
          height: auto;
          margin: 0 auto;
          padding: 0;
          color: ${theme.colors.secondary};
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
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
      `;
    }}
  />
);

export default GlobalStyle;
