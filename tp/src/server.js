require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/dbconfig");
const cors = require("cors");
const Routes = require("./routes");
const middlewares = require("./middlewares/");
const { errorHandler } = middlewares.errorhandler;
const mongoose = require('mongoose')

const port = process.env.PORT;

mongoose.connect('mongodb+srv://fadehandaniel2006:fadexadex@cluster0.dobfa6u.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", Routes.driverRoutes);
app.use("/api", Routes.studentRoutes);

app.use(errorHandler);

app.listen(port, () => {
  connectDB();
  console.log(`Sever listening on ${p0rt}`);
});
