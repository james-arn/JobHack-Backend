require("./db/connection.js");
const express = require("express");
const cors = require("cors");
const userRouter = require("./user/user.controllers.js");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(userRouter);

app.get("/health", (req, res) => res.send("Alive!"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
