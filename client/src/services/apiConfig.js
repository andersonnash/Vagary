import axios from "axios";

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};

const api = axios.create({
<<<<<<< HEAD
  baseURL:
    process.env.NODE_ENV === "production" ? "" : "http://localhost:4567/api",
=======
  baseURL: process.env.NODE_ENV === 'production'
  ? ""
  : "http://localhost:4567/api",
>>>>>>> 91db46428500485a776b0f2ad149ec359b8250e4
});

axios.interceptors.request.use(
  async (config) => {
    config.headers["Authorization"] = await getToken();
    return config;
  },
  (error) => {
    console.log("request Error:", error.message);
    return Promise.reject(error);
  }
);

export default api;
