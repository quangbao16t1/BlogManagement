import express, { Router } from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./src/models/index.js";
import userRouter from "./src/routes/user.routes.js";
import postRouter from "./src/routes/post.routes.js";
import rateRouter from "./src/routes/rate.routes.js";

dotenv.config();

try {
       // connectDB.sequelize.sync();
       connectDB.sequelize.sync({ force: false })
              .then(() => {
                     console.log('yes re-sync done!')
              })
       console.log("connect success!!")
} catch (error) {
       console.log(error);
}



const app = express();
const port = process.env.PORT || 3133;

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
       extended: true
}));

app.use('/', userRouter);
app.use('/', postRouter);
app.use('/', rateRouter);

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