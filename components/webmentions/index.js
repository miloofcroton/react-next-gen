// https://mxb.dev/blog/using-webmentions-on-static-sites/#webmentions
import React, { useState, useEffect } from "react";
import { Heading, Button, Text, Box } from "rebass";
import { useColorMode } from "theme-ui";
import { getWebMentions, sortWebMentions } from "./utils";
import WebMention from "./webmention";
import Link from "../link";
import { siteMeta } from "../../blog.config";

function WebMentions({ url, theme }) {
  const [colorMode, setColorMode] = useColorMode();
  const [webmentionsArr, setWebmentionsArr] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { children } = await getWebMentions();
        setWebmentionsArr(children);
      } catch (error) {
        console.error("Error when trying to get webmentions:", error);
        setWebmentionsArr([]);
      }
    };
    getData();
  }, []);

  const postUrl = `${siteMeta.siteUrl}${url}`;
  const sorted = sortWebMentions(webmentionsArr, `${postUrl}`);

  const Instructions = props => (
    <Box {...props}>
      <Text as="p">
        Tweets with a link to this post appear as{" "}
        <Link href="https://indieweb.org/Webmention" target="_blank">
          Webmentions.
        </Link>
      </Text>

      <Button
        mt={2}
        as="a"
        href={`https://twitter.com/intent/tweet/?text=My reply for ${siteMeta.siteUrl}${url}/`}
        target="_blank"
      >
        Leave a comment
      </Button>
    </Box>
  );

  return (
    <Box
      variant={colorMode === "light" ? "webmentionsLight" : "webmentionsDark"}
      p={3}
      mt={4}
    >
      <Heading as="h2" fontSize={4} my={0}>
        Webmentions
      </Heading>

      <Instructions mt={4} mb={1} />

      <Box as="ul" ml={0} pl={0} listStyle="none">
        {sorted.map(webmention => (
          <WebMention key={webmention["wm-id"]} webmention={webmention} />
        ))}
      </Box>
    </Box>
  );
}

export default WebMentions;
