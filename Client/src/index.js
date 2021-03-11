import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';
import './styles/navbar.css';
import './styles/addModal.css';
import './styles/scoreModal.css';
import './styles/loginPage.css';

import './styles/mScreenW750.css';
import './styles/mScreenW650.css';
import './styles/mScreenW500.css';
import './styles/mScreenW400.css';
import './styles/mScreenW350.css';
import './styles/mScreenW300.css';

import './styles/mScreenH750.css';
import './styles/mScreenH650.css';




import App from './App';
import LoginPage from './Components/LoginPage';


// const autoprefixer = require('autoprefixer')
// const postcss = require('postcss')

// postcss([autoprefixer]).process(css).then(result => {
//   result.warnings().forEach(warn => {
//     console.warn(warn.toString())
//   })
//   console.loc(result.css)
// })


let loggedIn = false;

let cookies = document.cookie;
if (cookies){
  loggedIn = true;
}

ReactDOM.render(
  <React.StrictMode>
    {loggedIn ? <App /> : <LoginPage/>}
  </React.StrictMode>,
  document.getElementById('root')
);

