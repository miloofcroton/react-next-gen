import Layout from "./default";
import { Box, Heading } from "rebass";

function Page({ meta, children }) {
  return (
    <Layout pageTitle={meta.title}>
      <Box as="article">
        <Box as="header" mb={4}>
          <Heading as="h1">{meta.title}</Heading>
        </Box>
        <Box>{children}</Box>
      </Box>
    </Layout>
  );
}

export default Page;
