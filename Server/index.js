const express = require('express');
const cors = require('cors')
const path = require('path');

const app = express();

app.use(cors())

app.get('/test', (req, res) => {
  console.log("JSON$$$$$$$", JSON.stringify({data: {
    "question": "What is the official name for the 'hashtag' symbol?",
    "incorrect": ["Number sign", "Hash Sign", "Pound"],
    "correct": "Octothorpe"
  }}))
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({data: {
    "question": "What is the official name for the 'hashtag' symbol?",
    "incorrect": ["Number sign", "Hash Sign", "Pound"],
    "correct": "Octothorpe"
  }}))
})

const port = process.env.PORT || 8080;

app.listen(port);

console.log('App li listening on port ' + port);