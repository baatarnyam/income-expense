import express from "express";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
// const pg = require("pg");
import pg from "pg";

const app = express();
app.use(express.json());

const CONNECTION_STRING =
  "postgresql://bbaatarnya:WZq3Gsor8Sdj@ep-odd-mode-a1wuowqp.ap-southeast-1.aws.neon.tech/incomeDb?sslmode=require";

export const client = new pg.Client({
  connectionString: CONNECTION_STRING,
});

const dbInit = async () => {
  await client.connect();
  await createUserTable();
};
dbInit();

// client.on("error", async (error, cl) => {
//   if (error) {
//     await client.connect();
//   }
// });

const createUserTable = async () => {
  const userTableCreateQuery = `CREATE TABLE IF NOT EXISTS users( 
    id SERIAL PRIMARY KEY,  
    username TEXT NOT NULL, 
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    age SMALLINT
  )`;

  const result = await client.query(userTableCreateQuery);
  // client.end();
};

// app.post("/signup", async (req, res) => {
//   res.send("working");
// });

const port = 8000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
app.use(cors());

app.use(userRouter);
