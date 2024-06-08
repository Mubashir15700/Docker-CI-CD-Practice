require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const tasksRoute = require("./src/routes/tasks");

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connected"))
  .catch(() => console.log("Not connected"));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("combined"));

app.use(cors({
  origin: "http://localhost:5173", // Allow requests only from this origin
  methods: ["GET", "POST", "DELETE"], // Allow only specified HTTP methods
  credentials: true
}));

app.use(tasksRoute);

app.listen(5000, () => console.log("Running on 5000"));
