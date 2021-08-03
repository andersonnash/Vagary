import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4555;

app.use(express.json());

app.use(cors());

app.use(morgan("dev"));

app.get("/", (req, res) => { console.log(req); res.send("<h1>Vagary baby</h1>")});

app.listen(PORT, console.log(`Connected to port ${PORT}`));
