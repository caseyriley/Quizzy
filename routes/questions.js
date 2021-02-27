const express = require('express');
const router = express.Router();
const {Question} = require('./../models');

router.get('/', async(req, res) => {
  try {
    const questions = await Question.findAll()

    res.send(JSON.stringify(questions))
  } catch(err){
    console.log(err)
    return res.status(500).json({error: 'Something went wrong'})
  }

})

router.post('/', async(req, res) => {
  let post = JSON.stringify(req.body)
  try {
    const qna = await Question.create({ "qna": post });
    res.send(JSON.stringify(qna));
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  };
})

module.exports = router;