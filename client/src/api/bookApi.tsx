import axios from 'axios';

const URL =
  process.env.NODE_ENV === 'production'
    ? 'http://52.14.101.121/'
    : 'http://localhost:8000/';

export const getSearchBook = async (title: string) => {
  try {
    const res = await axios.get(URL, {
      params: title
    });
    return res.data.items;
  } catch (err) {
    console.error(err);
  }
};
