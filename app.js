const express = require("express");
const cors = require("cors");
const createError = require("http-errors");
const morgan = require("morgan");
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

app.get("/", async (req, res, next) => {
  res.status(200).send({ status: 200, message: "Amazing it works 😊" });
});

app.use("/health", require("./Routes/health.route"));

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Your server running on http://localhost:${PORT}`);
});
