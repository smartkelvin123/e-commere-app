const express = require("express");
const cloudinary = require("../utilis/cloudinary");
const Product = require("../models/product");
const { isAdmin } = require("../middleware/auth");

const router = express.Router();

router.post("/", isAdmin, async (req, res) => {
  const { name, brand, desc, image } = req.body;

  try {
    if (image) {
      const uploadRes = await cloudinary.uploader.upload(image, {
        upload_preset: "smart-kelvin-online_shop",
      });
      if (uploadRes) {
        const product = new Product({
          name,
          brand,
          desc,
          price,
          image: uploadRes.secure_url,
        });
        const saveProduct = await product.save();
        res.status(200).send(saveProduct);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
