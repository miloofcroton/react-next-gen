export default {
  useCustomProperties: true,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace"
  },
  fontSizes: [14, 16, 18, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: "#dddddd",
    background: "#16191f",
    primary: "#ffdc00",
    secondary: "#90adc6",
    muted: "#f6f6f6",
    gray: "rgb(170, 170, 170)",
    darkGray: "rgb(43, 43, 43)",
    black: "#111",
    code: "#ddd",
    social: {
      twitter: "#1da1f2",
      bookmark: "#8e44ad",
      like: "rgb(224, 36, 94)",
      retweet: "rgb(23, 191, 99)",
      reply: "rgb(27, 149, 224)"
    },
    modes: {
      light: {
        text: "#333652",
        background: "#e9eaec",
        // primary: "#8e44ad",
        primary: "#2980b9",
        // secondary: "#333652",
        secondary: "#27ae60",
        muted: "#f6f6f9",
        gray: "#555",
        darkGray: "rgb(43, 43, 43)",
        black: "#111",
        code: "#ddd",
        social: {
          twitter: "#1da1f2",
          bookmark: "#8e44ad",
          like: "rgb(224, 36, 94)",
          retweet: "rgb(23, 191, 99)",
          reply: "rgb(27, 149, 224)"
        }
      }
    }
  },
  variants: {
    link: {
      color: "primary"
    },
    webmentionsDark: {
      backgroundColor: "black"
    },
    webmentionsLight: {
      color: "background",
      backgroundColor: "darkGray"
    }
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: "bold",
      color: "background",
      bg: "primary",
      borderRadius: "default"
    },
    outline: {
      variant: "buttons.primary",
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 2px"
    },
    secondary: {
      variant: "buttons.primary",
      color: "background",
      bg: "secondary"
    }
  },
  styles: {
    root: {
      fontSize: 2,
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },
    h1: {
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 5
    },
    h2: {
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 4
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 3
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 2
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 1
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "1.2",
      fontWeight: "heading",
      fontSize: 0
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      code: {
        bg: "darkGray",
        color: "code",
        padding: ".1em .2em"
      }
    },
    li: {
      a: {
        color: "primary"
      }
    },
    a: {
      color: "primary"
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit"
      },
      background: "background"
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit"
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    img: {
      maxWidth: "100%"
    },
    blockquote: {
      padding: ".5em .5em .5em 1.5em",
      marginLeft: 0,
      borderLeft: ".3em solid",
      borderColor: "primary",
      "& > p:first-of-type": {
        marginTop: 0
      }
    }
  }
};
