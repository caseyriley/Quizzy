const express = require('express');
const qs = require('querystring');
const {Question, sequelize} = require('./models')


const cors = require('cors')
const path = require('path');
const { request } = require('http');

const router = express.Router();

const app = express();

app.use(cors(), express.json())
app.use(express.static(path.join(__dirname, 'static')));

app.post('/questions', async(req, res) => {
  if (req.method == 'POST'){
    let post = JSON.stringify(req.body)
    try {
      const qna = await Question.create({ "qna": post });
      res.send(JSON.stringify(qna));
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    };
  }
})

app.get('/questions', async(req, res) => {
  try {
    const questions = await Question.findAll()

    res.send(JSON.stringify(questions))
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

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  // res.send(JSON.stringify({data:"hit /"}))
  res.render('index.html')
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


