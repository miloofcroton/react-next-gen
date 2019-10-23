// @ts-check
import fetch from "isomorphic-unfetch";
import config from "../../blog.config";

const API_URL = "https://webmention.io/api/mentions.jf2";

export default async (req, res) => {
  res.setHeader("Cache-Control", "max-age=86400, s-maxage=86400");
  const url = `${API_URL}?domain=${config.webMentionsIo.domain}&token=${
    process.env.WEBMENTION_IO_TOKEN
  }`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      res.json(await response.json());
    }
  } catch (err) {
    console.error(err);
    res.status(200);
  }
};
