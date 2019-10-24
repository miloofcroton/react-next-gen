import fetch from 'isomorphic-unfetch';

export const sampleFetchWrapper = async (
  input: RequestInfo,
  init?: RequestInit,
) => {
  try {
    const data = await fetch(input, init).then((res) => res.json());
    return data;
  }
  catch (err) {
    throw new Error(err.message);
  }
};
