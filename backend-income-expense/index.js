import express from "express";
import cors from "cors";
import userRouter from "./routes/userRouter.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use(userRouter);
const port = 8000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
