import { Flex, Box, Text } from "rebass";
import Link from "./link";
import Container from "./container";

function Footer() {
  return (
    <Box as="footer" py={4}>
      <Container>
        <Text as="p" textAlign="center" mb={2}>
          <Link href="https://creativecommons.org/licenses/by-sa/4.0/">
            CC BY-SA
          </Link>{" "}
          {new Date().getFullYear()}, Juan Olvera
        </Text>

        <Flex justifyContent="center" mb={2}>
          <Link
            href="https://xn--sr8hvo.ws/%F0%9F%8D%B5%F0%9F%90%94%F0%9F%95%96/previous"
            mr={2}
          >
            ←
          </Link>
          Member of the IndieWeb Webring 🕸💍
          <Link
            href="https://xn--sr8hvo.ws/%F0%9F%8D%B5%F0%9F%90%94%F0%9F%95%96/next"
            ml={2}
          >
            →
          </Link>
        </Flex>

        <Text textAlign="center">
          Proudly built with <Link href="https://nextjs.org">Next.js</Link> -{" "}
          <Link href="https://github.com/j0lv3r4/jolvera.dev">Source code</Link>{" "}
          - <Link href="/feed.json">JSON Feed</Link>
        </Text>
      </Container>
    </Box>
  );
}

export default Footer;
