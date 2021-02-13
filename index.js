const express = require('express');
const {Question, sequelize} = require('./models')

const cors = require('cors')
const path = require('path');

const app = express();

app.use(cors(), express.json())

app.post('/questions', async(req, res) => {
  const {qna} = req.body

  try{
    const qna = await Question.create({qna})
    return res.json(qna)
  } catch(err){
    console.log(err)
    return res.status(500).json(err)
  }
})

app.get('/questions', async(req, res) => {
  try {
    const questions = await Question.findAll()

    return res.json(questions)
  } catch(err){
    console.log(err)
    return res.status(500).json({error: 'Something went wrong'})
  }

})

app.get('/test', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({data: {
    "question": "What is the official name for the 'hashtag' symbol?",
    "incorrect": ["Number sign", "Hash Sign", "Pound"],
    "correct": "Octothorpe"
  }}))
})

const port = process.env.PORT || 8080;

app.listen(port, async () => {
  console.log(`App listening on port ${port}`);

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})


