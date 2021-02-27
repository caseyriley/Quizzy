const express = require('express');
const questionRouter = require('./routes/questions.js')
const userRouter = require('./routes/users.js')
const {sequelize} = require('./models')
const env = process.env.NODE_ENV || 'development';

const cors = require('cors')
const path = require('path');
const { request } = require('http');

const app = express();

app.use(cors(), express.json())
app.use(express.static(path.join(__dirname, 'Client/build')));
app.use('/questions', questionRouter);
app.use('/users', userRouter);


app.get('/test', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send("Route to /test working")
})


app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(path.join(__dirname+'/Client/build/index.html'));
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


