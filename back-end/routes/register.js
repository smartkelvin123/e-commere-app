const bcrypt = require("bcrypt");
const joi = require("joi");
const express = require("express");

const router = express.Router();
const User = require("../models/user");

const genAuthToken = require("../utilis/genAuthToken");

router.post("/", async (req, res) => {
  const Schema = joi.object({
    name: joi.string().min(3).max(50).required(),
    email: joi.string().min(3).max(200).email().required(),
    password: joi.string().min(3).max(200).required(),
  });

  const { error } = Schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).send("User already registered");

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  user = await user.save();

  const token = genAuthToken(user);
  res.send(token);
});

module.exports = router;
