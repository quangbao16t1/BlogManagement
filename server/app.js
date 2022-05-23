import express, { Router } from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDb  from "./src/configs/db.config.js";

dotenv.config();

connectDb;



const app = express();
const port = process.env.PORT || 3133;

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({   
       extended: true
     }));

app.get("/", (req, res) => {
       res.json({
              message: "Hell World"
       });
});

app.get("/api/", (req, res) => {
       console.log("dsadsasdas");
       res.json({
              message: "Xin chao"
       });
});

app.listen(port, () => {
       console.log(`Server is listening on http://localhost:${port}`);
});