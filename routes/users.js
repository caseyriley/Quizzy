const express = require('express');
const router = express.Router();
const {User} = require('./../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/', async(req, res) => {

  const post = req.body;
  console.log("user POST", post)
  console.log("post.password======>", post["password"])

  const password = await bcrypt.hashSync(post["password"], 10);
  const email = post["email"];
  const name = post["name"];
  const language = post["language"];

  try {
    const user = await User.create({"email": email, "password": password, "name": name, "language": language});
    console.log("JSON.stringify(user)%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%", JSON.stringify(user))
    res.send(JSON.stringify(user))
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  };
})

module.exports = router;