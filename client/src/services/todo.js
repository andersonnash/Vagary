import api from "./apiConfig";

export const getAllTodos = async () => {
  try {
    const res = await api.get("/todos");
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const createTodo = async (input) => {
  try {
    const res = await api.post("/todos", input);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getOneTodo = async (id) => {
  try {
    const res = await api.get(`/todos/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const deleteOneTodo = async (id) => {
  try {
    const res = await api.delete(`todos/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const updateTodo = async (id) => {
  try {
    const res = await api.put(`/todos/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};
