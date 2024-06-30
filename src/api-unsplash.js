/** @format */

import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/";
const accessKey = "9bUNvo9sFDFGbjuMK09M1GdjTXOWpqz1kanMrMKeBZE";

export const getArticles = async (topic, page) => {
  const response = await axios.get(`search/photos`, {
    params: {
      query: topic,
      client_id: accessKey,
      per_page: 12,
      page,
    },
  });
  return response.data.results;
};
