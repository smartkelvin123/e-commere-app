const jwt = require("jsonwebtoken");

const genAuthToken = (user) => {
  const secretKey = process.env.JWT_SECRET;
  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    secretKey,
    {
      expiresIn: "7d",
    }
  );

  return token;
};

module.exports = genAuthToken;
