require('dotenv').config();
const express = require('express');
const router = express.Router();
const {User} = require('./../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/', async(req, res) => {

  const post = req.body;

  const password = await bcrypt.hashSync(post["password"], 10);
  const email = post["email"];
  const name = post["name"];
  const language = post["language"];

  try {
    let user = await User.create({"email": email, "password": password, "name": name, "language": language})
    .then(res => {
      console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww")
      const accessToken = jwt.sign(name, process.env.JWT_SECRET)
      console.log("accessToken=============================================>", accessToken)
      return res.json({accessToken: accessToken, user: user})
    })
    .catch(err => {
      console.log("NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN")
      return res.status(409).json(err);
    })


  } catch (err) {
    return res.status(500).json(err);
  };
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

module.exports = router;