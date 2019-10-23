import React from "react";
import App from "next/app";
// import { ThemeProvider } from "emotion-theming";
import { ThemeProvider, ColorMode, Styled } from "theme-ui";
import theme from "../theme";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <ColorMode />
        <Styled.root>
          <Component {...pageProps} />
        </Styled.root>
      </ThemeProvider>
    );
  }
}

export default MyApp;
