import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4567/api",
});

export default api;
