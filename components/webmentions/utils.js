import satinizeHTML from "sanitize-html";
import fetch from "isomorphic-unfetch";

const allowedTypes = ["mention-of", "in-reply-to"];

const sanitize = entry => {
  const { content } = entry;

  if (!content) {
    return entry;
  }

  if (content["content-type"] === "text/html") {
    content.html = satinizeHTML(content.html);
  }

  return entry;
};

const isValid = entry => {
  const { author, published, content } = entry;
  return author.name;
};

export const getWebMentions = async () => {
  const url = `${process.env.DOMAIN}/api/webmentions`;
  try {
    const response = await fetch(url);

    if (response.ok) {
      const js = await response.json();
      return js;
    }
  } catch (err) {
    console.error("Error trying to get the webmentions", err);
    return {};
  }
};

export const sortWebMentions = (webmentions = [], url) =>
  webmentions
    .filter(entry => {
      return entry["wm-target"] == url;
    })
    // .filter(entry => allowedTypes.includes(entry["wm-property"]))
    .filter(isValid)
    .map(sanitize);
