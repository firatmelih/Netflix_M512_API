const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    isAdmin: false,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET
    ).toString(),
  });
  try {
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong credentials!");

    const decodedUserPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET
    );
    const formattedDecodedUserPassword = decodedUserPassword.toString(
      CryptoJS.enc.Utf8
    );

    formattedDecodedUserPassword !== req.body.password &&
      res.status(401).json("Wrong credentials!");

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET,
      { expiresIn: "1d" }
    );
    const { password, ...secureData } = user._doc;
    res.status(200).json({ ...secureData, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
