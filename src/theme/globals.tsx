/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Global, css } from '@emotion/core';

export const GlobalStyle = () => (
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
          font-size: 1rem;
        }
      `;
    }}
  />
);
