import axios from 'axios';

export const getMethod = async url => {
  const res = await axios.get(url);
  return res;
};

export const postMethod = async (url, data) => {
  const res = await axios.post(url, data);
  return res;
};
