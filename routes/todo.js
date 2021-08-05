import {Router} from "express"
import restrict from "../helpers/restrict.js"
import {getAllTodos, createTodo, getTodo, updateTodo, deleteTodo} from "../controllers/todos.js"

// SUBJECT TO CHANGE: imported functions depending on whats being called in controllers
// Make necessary changes once pulled.

const router = Router();
// get all todos
router.get("/todos", getAllTodos)
// get todo id
router.get("/todos/:id", getTodo)
// post created todo
router.post("/todos", restrict, createTodo)
// update todo (PUT)
router.put("/todos/:id", restrict, updateTodo)
// delete Todo
router.delete("/todos/:id", restrict, deleteTodo)

export default router;