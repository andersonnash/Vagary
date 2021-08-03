import express from "express";
import morgan from "morgan";
import cors from "cors";
// import { Router } from "express";

// import db from "./db/connections.js";

// import routes from "./routes/index";

const app = express();
const PORT = process.env.PORT || 4555;

app.use(express.json());

app.use(cors());

app.use(morgan("dev"));

// app.use("/api", routes);

app.get("/", (req, res) => {
  console.log(req);
  res.send("<h1>Vagary baby</h1>");
});

app.listen(PORT, console.log("We are connected to 4555!"));

// db.on("connected", () => {
//   console.log("Connected to MongoDB");
//   app.listen(PORT, console.log(`connected to port: ${PORT}`));
// });
