import axios from 'axios';

const URL = 'http://localhost:8000/';

export const getSearchBook = async (title: string) => {
  try {
    const res = await axios.get(URL, {
      params: title
    });
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};
