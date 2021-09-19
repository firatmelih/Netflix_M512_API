const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
require("dotenv").config();

const URL =
  process.env.URLSTART +
  process.env.USERNAME.toLocaleLowerCase() +
  ":" +
  process.env.PASSWORD +
  process.env.URLEND;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is up on PORT ${process.env.PORT}`);
});