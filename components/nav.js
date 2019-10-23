import { useColorMode } from "theme-ui";
import { Box, Flex, Button } from "rebass";
import Link from "./link";

const Nav = props => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Box as="nav" ml={[0, "auto"]} {...props}>
      <Flex
        pl={0}
        ml={0}
        mb={0}
        as="ul"
        sx={{
          listStyle: "none",
          "li:not(:first-of-type) a, li:not(:first-of-type) button": {
            "margin-left": "1rem"
          }
        }}
      >
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>

        <li>
          <Link href="/projects">Projects</Link>
        </li>

        <li>
          <Button
            mt={"-10px"}
            py={1}
            px={2}
            fontSize={1}
            fontWeight="body"
            onClick={e => {
              setColorMode(colorMode === "light" ? "dark" : "light");
            }}
          >
            {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </li>
      </Flex>
    </Box>
  );
};

export default Nav;
