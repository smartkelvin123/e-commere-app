const express = require("express");

const cors = require("cors");

const app = express();
app.use(cors());
const products = require("./product");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!  welcome");
});
app.get("/products", (req, res) => {
  res.send(products);
});

// const uri = process.env.DB_URI;
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

// mongoose
//   .connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connection established..."))
//   .catch((error) => console.error("MongoDB connection failed:", error.message));
