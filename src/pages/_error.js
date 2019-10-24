import React from 'react';
import Error from 'next/error';
import fetch from 'isomorphic-unfetch';

/** Notes:
 * If you have created a custom error page you have to import your own _error component from ./_error instead of next/error.
 * The 'next/error' component also takes title as a property if you want to pass in a text message along with a statusCode.
 */
const ErrorPage = ({ errorCode, stars }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return <div>Next stars: {stars}</div>;
};

ErrorPage.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js');
  const errorCode = res.statusCode > 200 ? res.statusCode : false;
  const json = await res.json();

  return { errorCode, stars: json.stargazers_count };
};

export default ErrorPage;
