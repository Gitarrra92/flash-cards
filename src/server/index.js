const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = 8080;
const cors = require("cors");
const router = require("./routes/fetchAPIRouter");

const MONGO_URI =
  "mongodb+srv://admin:XXXX@cluster0.c5khf.mongodb.net/flash-cards?retryWrites=true&w=majority";
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("works");
});

app.use(router);

app.listen(PORT, async () => {
  await mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(async () => {
      console.log(PORT);
    });
});
