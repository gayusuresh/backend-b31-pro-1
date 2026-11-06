const express = require("express");
require("dotenv").config();
const cors = require("cors");

const dbConnection = require("./config/dbConnection")
const userRouter = require("./router/user.router");
const productRouter = require("./router/product.router")
const app = express();
app.use(express.json());
app.use(cors());
dbConnection();
app.use("/auth", userRouter);
app.use("/products", productRouter);

app.listen(process.env.port, () => {
  console.log(`server running successfully ${process.env.port}`);
});