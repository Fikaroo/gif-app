import axios from "axios";
import { Main } from "../types";

const headersList = {
  "X-RapidAPI-Key": "92aebb0be2mshc788f57343e36eap1147e3jsn1c26b6385166",
  "X-RapidAPI-Host": "giphy.p.rapidapi.com",
};

const apiKey = import.meta.env.VITE_API_KEY;

const instance = axios.create({
  baseURL: "https://giphy.p.rapidapi.com/v1",
  headers: headersList,
  params: { api_key: apiKey },
});

export const Apis = {
  getDataGifs: async (): Promise<Main> => {
    const { data } = await instance.get("/gifs/trending");
    return data;
  },

  getDataStickers: async (): Promise<Main> => {
    const { data } = await instance.get("/stickers/trending", {
      params: { s: "hungry" },
    });
    return data;
  },
};
