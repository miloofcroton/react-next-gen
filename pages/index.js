import { withRouter } from "next/router";
import { Flex, Box, Heading, Text } from "rebass";
import Link from "../components/link";
import { siteMeta } from "../blog.config";
import Layout from "../components/layouts/default";

const Home = ({ router }) => {
  return (
    <Layout pageTitle="Home" path={router.pathname}>
      <Flex
        className="h-card"
        flexDirection={["column", "row"]}
        alignItems="center"
        justifyContent="center"
        py={4}
        my={4}
      >
        <Box
          className="u-photo"
          as="img"
          src="/static/_jolvera.png"
          alt={siteMeta.author}
          mb={[4, 0]}
        />

        <Box ml={3}>
          <Heading as="h2" mb={3} mt={0}>
            Hi, I'm{" "}
            <Link
              className="u-url p-name"
              href={siteMeta.siteUrl}
              rel="me"
              textDecoration="none"
            >
              Juan Olvera
            </Link>
          </Heading>
          <Text className="p-note" as="p" fontSize={2}>
            I'm a frontend developer &amp; web standards enthusiastic.
          </Text>

          <Text as="p" fontSize={2} fontWeight="bold" mb={0}>
            I build inclusive, fast and responsive web experiences.
          </Text>
        </Box>
      </Flex>
    </Layout>
  );
};

export default withRouter(Home);
