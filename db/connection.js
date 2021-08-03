import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/vagary";

mongoose.set("debug", true);
mongoose.set("useCreateIndex", true);
mongoose.set("returnOriginal", true)

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .catch((error) =>
    console.error("Error connecting to MongoDB:", error.message)
);
  
mongoose.connection.on("error", (error) => console.error(`MongoDB connection error: ${error.message}`)
);

mongoose.connection.on("disconnected", () => console)