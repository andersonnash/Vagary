// import todo from "../models/todo.js";
import Todo from "../models/todo.js";
// import User from "../models/user.js";

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json(todos);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id).populate("user_id");
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ error: "Todo not found" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const createTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body)
    const todo = await Todo.findByIdAndUpdate(id, req.body);
    console.log(todo)
    res.json(todo);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Todo.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Successfully Deleted');
    }
    throw new Error('Trip not found');
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
