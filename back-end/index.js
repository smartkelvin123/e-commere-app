const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const products = require("./products");
require("dotenv").config();
const register = require("./routes/register");
const login = require("./routes/login");
const stripe = require("./routes/stripes");
const productsRoute = require("./routes/product");

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!  welcome");
});

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/stripe", stripe);
app.use("/api/productsRoute", productsRoute);

const port = process.env.PORT || 5000;
const uri = process.env.DB_URL;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

mongoose
  .connect(uri, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));
