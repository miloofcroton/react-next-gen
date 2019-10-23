import { Styled } from "theme-ui";
import { withRouter } from "next/router";
import { TypeScale, TypeStyle, ColorPalette } from "@theme-ui/style-guide";
import Layout from "../components/layouts/default";

function StyleGuide({ router }) {
  return (
    <Layout pageTitle="Style Guide" path={router.pathname}>
      <Styled.h1>Style Guide</Styled.h1>
      <ColorPalette />

      <Styled.h2>Type Specimens</Styled.h2>

      <TypeStyle fontSize={7}>System Font (Body)</TypeStyle>
      <TypeStyle
        fontFamily="heading"
        fontWeight="heading"
        lineHeight="heading"
        fontSize={7}
      >
        Heading
      </TypeStyle>
      <TypeStyle fontFamily="monospace" fontSize={7}>
        Monospace
      </TypeStyle>

      <Styled.h2>Type Scale</Styled.h2>

      <TypeScale fontWeight="heading" />
    </Layout>
  );
}

export default withRouter(StyleGuide);
