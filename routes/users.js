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
  const token = jwt.sign(name, process.env.JWT_SECRET)
  try {
    const user = await User.create({"email": email, "password": password, "name": name, "language": language})
    return res.json({token: token, user: user})
  } catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
})

router.post('/login', async(req, res) => {
  
  const post = req.body;

  const sentPassword = post["password"];
  const email = post["email"]

  const user = await User.findOne({where: { email: email}});
  bcrypt.compare(sentPassword, user.password, function(err, isMatch){
    if (err) {
      throw err
    } else if (!isMatch) {
      console.log("Password doesn't match!")
    } else {
      console.log("Password matches!")
      const token = jwt.sign(user.name, process.env.JWT_SECRET)
      return res.json({token: token, user: user})
    }
  })
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