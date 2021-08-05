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
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (todo) {
      return res.status(201).send("Todo Updated");
    } else {
      return res.status(404).send("Todo Not Found");
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todo = await Post.findByIdAndDelete(req.params.id);
    await User.findByIdAndUpdate(
      { _id: post.user_id },
      { $pull: { posts: post._id } }
    );
    if (todo) {
      return res.status(200).send("Todo Deleted");
    } else {
      return res.status(404).send("Todo Not Found");
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
