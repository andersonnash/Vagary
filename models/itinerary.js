import mongoose, { Schema } from "mongoose";
const Schema = mongoose.Schema;

const ItinerarySchema = new Schema(
    {
        location: {type: String, required: true },
        imageURL: { type: String, required: true },
        description: { type: String, required: true },
        date: { type: String, required: false },
        flightInfo: { type: String, required: false },
        user_id: { type: Schema.Types.ObjectId, ref: "User"},
    },
    { timestamps: true }
)

export default mongoose.model("Itinerary", ItinerarySchema );