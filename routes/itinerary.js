import {Router} from "express"
import restrict from "../helpers/restrict.js"
import {} from "../controllers/itineraries.js"



const router = Router();
// get all Internaries
router.get("/itineraries", restrict, getAllTodos)
// get Intinerary id
router.get("itineraries/:id", getTodo)
// post created Intinerary
router.post("/itineraries", restrict, createTodo)
// update Itinerary (PUT)
router.put("/itineraries/:id", restrict, updateTodo)
// delete Itinerary
router.delete("/itineraries/:id", restrict, deleteTodo)

export default router