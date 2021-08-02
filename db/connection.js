import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/vagary";

mongoose.set("debug", true);
mongoose.set("useCreateIndex", true);

export default mongoose.connection;