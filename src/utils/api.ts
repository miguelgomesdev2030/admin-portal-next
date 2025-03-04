import axios from "axios";

export const api = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL:
    "http://bookingsystem-env-1.eba-ipbed9av.eu-west-3.elasticbeanstalk.com",
  withCredentials: true,
});
