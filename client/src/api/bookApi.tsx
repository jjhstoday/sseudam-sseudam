import axios from 'axios';

const URL =
  process.env.NODE_ENV === 'production' ? `${process.env.REACT_APP_SERVER_HOST}:8000/` : 'http://localhost:8000/';

export const getSearchBook = async (title: string) => {
  try {
    const res = await axios.get(URL, {
      params: title,
    });
    return res.data.items;
  } catch (err) {
    console.error(err);
  }
};
