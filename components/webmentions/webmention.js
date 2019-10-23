import {
  FaBookmark,
  FaHeart,
  FaRetweet,
  FaTwitter,
  FaReply
} from "react-icons/fa";
import dashify from "dashify";
import hdate from "human-date";
import Link from "../link";
import { Flex, Text, Box, Image } from "rebass";

const Twitter = ({ url }) => (
  <Link href={url} color="twitter">
    <FaTwitter />
  </Link>
);

const Bookmark = ({ url }) => (
  <Link href={url} color="bookmark">
    <FaBookmark />
  </Link>
);

const Like = ({ url }) => (
  <Link href={url} color="like">
    <FaHeart />
  </Link>
);

const Retweet = ({ url }) => (
  <Link href={url} color="retweet">
    <FaRetweet />
  </Link>
);

const Reply = ({ url }) => (
  <Link href={url} color="reply">
    <FaReply />
  </Link>
);

function WebMention({ webmention }) {
  const { author, content, published, url } = webmention;

  const { hostname, protocol } = new URL(url);
  const authorWebsite = `${protocol}//${hostname}`;

  // If a picture is not present, use http://avatars.adorable.io/ as fallback.
  // Also, don't use `u-photo` if we use the placeholder
  const authorPhoto = author.photo
    ? author.photo
    : `https://api.adorable.io/avatars/285/${dashify(author.name)}`;

  const fromTwitter = author.url.includes("twitter");
  const isTwitterReply = fromTwitter && webmention["in-reply-to"];
  const isTwitterLike = fromTwitter && webmention["like-of"];
  const isReply = webmention["in-reply-to"];
  const isRetweet = webmention["repost-of"];
  const isBookmark = webmention["bookmark-of"];

  return (
    <Box
      as="li"
      mb={4}
      className="h-card"
      sx={{
        display: "grid",
        gridTemplateColumns: "3em auto"
      }}
    >
      <Link href={author.url} mr={2} target="blank" rel="noopener noreferrer">
        <Image
          className={author.photo ? "u-photo" : ""}
          src={authorPhoto}
          alt={author.name}
          height="auto"
          sx={{
            maxWidth: "45px",
            borderRadius: "50%"
          }}
        />
      </Link>
      <Box>
        <Flex alignItems="center">
          <Link
            className="u-url"
            href={author.url}
            rel="noopener noreferrer"
            mr={2}
          >
            <strong className="p-name">{author.name}</strong>
          </Link>

          {!isRetweet && !authorWebsite.includes("twitter") ? (
            <Link href={authorWebsite} mr={2} color="gray">
              {hostname}
            </Link>
          ) : (
            <Twitter url={author.url} />
          )}

          {isTwitterLike && <Like url={url} />}
          {isRetweet && <Retweet url={url} />}
          {isTwitterReply && <Reply url={url} />}
          {isBookmark && <Bookmark url={url} />}
        </Flex>
        <Link href={url} rel="noopener noreferrer" color="gray">
          <Text as="time" className="dt-published" dateTime={published}>
            {hdate.prettyPrint(published)}
          </Text>
        </Link>
        {content && (
          <Box className="p-content" mt={3}>
            {content.html ? (
              <div dangerouslySetInnerHTML={{ __html: content.html }} />
            ) : (
              content.text
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default WebMention;
