import express from "express";
import morgan from "morgan";
import cors from "cors";
// import { Router } from "express";

import db from "./db/connection.js";

import routes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

app.use(morgan("dev"));



app.get("/", (req, res) => { console.log(req); res.send("<h1>Vagary baby</h1>")});

// app.listen(PORT, console.log("We are connected to 4567!"));
