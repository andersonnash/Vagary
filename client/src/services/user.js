import api from "./apiConfig";
import jwtDecode from "jwt-decode";

export const signUp = async (credentials) => {
  try {
    const res = await api.post("/sign-up", credentials);
    console.log(res.data);
    localStorage.setItem("token", res.data);
    let user = jwtDecode(res.data);
    return user;
  } catch (e) {
    throw e;
  }
};
export const signIn = async (credentials) => {
  try {
    const res = await api.post("/sign-in", credentials);
    localStorage.setItem("token", res.data.token);
    let user = jwtDecode(res.data.token);
    return user;
  } catch (e) {
    throw e;
  }
};

export const verify = async () => {
  try {
    // const token = localStorage.getItem("token");
    const res = await api.get("/verify");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const signOut = async () => {
  try {
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (id) => {
  const res = await api.get(`/user/${id}`);
  return res.data;
};
