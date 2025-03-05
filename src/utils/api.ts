import axios from "axios";

const BACKEND_URL = "https://vq5gyh-8080.csb.app";
export const api = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: true,
});
