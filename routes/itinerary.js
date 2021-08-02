import {Router} from "express"
import restrict from "../helpers/restrict.js"
import {getAllItinerary, getItinerary, createItinerary, updateItinerary, deleteItinerary} from "../controllers/itineraries.js"



const router = Router();
// get all Internaries
router.get("/itineraries", restrict, getAllItinerary)
// get Intinerary id
router.get("itineraries/:id", getItinerary)
// post created Intinerary
router.post("/itineraries", restrict, createItinerary)
// update Itinerary (PUT)
router.put("/itineraries/:id", restrict, updateItinerary)
// delete Itinerary
router.delete("/itineraries/:id", restrict, deleteItinerary)

export default router