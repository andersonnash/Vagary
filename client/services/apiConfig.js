import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4555/api",
});

export default api;
