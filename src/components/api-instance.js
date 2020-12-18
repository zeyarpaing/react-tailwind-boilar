import axios from "axios";
const ACCESS_TOKEN = "P-HB7HDBpRRrbmuoukCUmKOklF5O9RHTIaxu8JTHyuI";
export const API = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${ACCESS_TOKEN}`,
  },
});
export const CovidAPI = axios.create({
  baseURL: "https://disease.sh/"
});
