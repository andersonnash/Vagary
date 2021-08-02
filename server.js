import express from "express";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json);

// app.use(cors());

app.use(morgan("dev"));

app.get("/", (req, res) => res.send("<h1>Vagary baby</h1>"));

app.listen(PORT, console.log("We are connected to 3000!"));