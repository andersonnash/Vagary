import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TodoSchema = new Schema (
    {
        name: { type: String, required: true },
        description: {type: String, required: true },
        Itinerary: { type: String, required: true },
        user_id: { type: Schema.Types.ObjectId, ref: "User"}
    },
    { timestamps: true }
);

export default mongoose.model("Todo", TodoSchema );