import Link from "../link";
import { Box, Flex } from "rebass";
import { siteMeta } from "../../blog.config";
import Layout from "./default";
import SyntaxHighlight from "../syntax-highlight";
import PublishedAt from "../utils/published-at";
import blogposts from "../../posts/index";
import NextPrevPost from "../next-prev-post";
import WebMentions from "../webmentions";
import Status from "../status";
import Changelog from "../changelog";

function BlogPost({ path, meta, children }) {
  const currentPostIndex = blogposts
    .map(({ title }) => title)
    .indexOf(meta.title);
  const previousPost = blogposts[currentPostIndex + 1];
  const nextPost = blogposts[currentPostIndex - 1];

  return (
    <Layout pageTitle={meta.title} ogImage={meta.image}>
      <SyntaxHighlight />
      <article className="h-entry">
        <Box as="header" mb={4}>
          <h1 className="p-name">{meta.title}</h1>

          <Flex>
            <PublishedAt date={meta.publishedAt} link={path} mr={3} />

            <Link
              href="/about"
              rel="author"
              className="p-author h-card"
              mr={3}
              color="gray"
            >
              {siteMeta.author}
            </Link>
            <Status status={meta.status} />
          </Flex>
        </Box>
        <div className="e-content">{children}</div>
        <Box as="footer" my={4}>
          <Box my={4}>
            {meta.changelog && <Changelog details={meta.changelog} />}
          </Box>

          {(previousPost || nextPost) && (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr"
              }}
            >
              {previousPost && (
                <NextPrevPost
                  title={previousPost.title}
                  path={previousPost.path}
                  position="previous"
                />
              )}
              {nextPost && (
                <NextPrevPost
                  title={nextPost.title}
                  path={nextPost.path}
                  position="next"
                />
              )}
            </Box>
          )}
        </Box>
      </article>

      <WebMentions url={path} />
    </Layout>
  );
}

export default BlogPost;
