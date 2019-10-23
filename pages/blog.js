import { Box, Flex, Heading, Text, Link as RebassLink } from "rebass";
import { withRouter } from "next/router";
import _range from "lodash.range";
import Link from "../components/link";
import pagination from "pagination";
import Layout from "../components/layouts/default";
import Post from "../components/blog-index-item";
import blogposts from "../posts/index";
import { siteMeta } from "../blog.config";

const Blog = ({ router, page = 1 }) => {
  const paginator = new pagination.SearchPaginator({
    prelink: "/",
    current: page,
    rowsPerPage: siteMeta.postsPerPage,
    totalResult: blogposts.length
  });

  const {
    previous,
    range,
    next,
    fromResult,
    toResult
  } = paginator.getPaginationData();
  const results = _range(fromResult - 1, toResult);

  return (
    <Layout pageTitle="Blog" path={router.pathname}>
      <Box as="header" mb={4}>
        <Heading as="h1">Blog</Heading>

        <Text as="p">
          You can subscribe to my{" "}
          <RebassLink href="/feed.json">blog JSON feed.</RebassLink>
        </Text>
      </Box>

      {blogposts
        .filter((_post, index) => results.indexOf(index) > -1)
        .map((post, index) => (
          <Post
            key={index}
            title={post.title}
            summary={post.summary}
            date={post.publishedAt}
            path={post.path}
            status={post.status}
          />
        ))}

      <Flex
        as="ul"
        pl={0}
        ml={0}
        sx={{
          listStyle: "none",
          "li:not(:first-of-type)": { marginLeft: "1em" }
        }}
      >
        {previous && (
          <li>
            <Link href={`/blog/${previous}`}>Previous</Link>
          </li>
        )}
        {range.map((page, index) => (
          <li key={index}>
            <Link key={index} href={`/blog/${page}`}>
              {page}
            </Link>
          </li>
        ))}
        {next && (
          <li>
            <Link href={`/blog/${next}`}>Next</Link>
          </li>
        )}
      </Flex>
    </Layout>
  );
};

Blog.getInitialProps = async ({ query }) => {
  return query ? { page: query.page } : {};
};

export default withRouter(Blog);
