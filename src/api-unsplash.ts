/** @format */

import axios from "axios";
import {Image, SearchResponse} from "./components/App/App.types";

axios.defaults.baseURL = "https://api.unsplash.com/";
const accessKey = "9bUNvo9sFDFGbjuMK09M1GdjTXOWpqz1kanMrMKeBZE";

export const getArticles = async (
  topic: string,
  page: number
): Promise<Image[]> => {
  const response = await axios.get<SearchResponse>(`search/photos`, {
    params: {
      query: topic,
      client_id: accessKey,
      per_page: 12,
      page,
    },
  });
  return response.data.results;
};
