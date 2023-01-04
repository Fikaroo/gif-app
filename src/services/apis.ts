import axios from "axios";
import { Main } from "../types";

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;

const headersList = {
  "X-RapidAPI-Key": rapidApiKey,
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
      params: { s: "l love you" },
    });
    return data;
  },
};
