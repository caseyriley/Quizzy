import React from 'react';
import ReactDOM from 'react-dom';
import './dest/css/app.css';
import './dest/css/navbar.css';
import './dest/css/addModal.css';
import './dest/css/scoreModal.css';
import './dest/css/loginPage.css';

import './styles/mScreenW700.css';
import './dest/css/mScreenW750.css';
import './dest/css/mScreenW650.css';
import './dest/css/mScreenW500.css';
import './dest/css/mScreenW400.css';
import './dest/css/mScreenW350.css';
import './dest/css/mScreenW300.css';

import './dest/css/mScreenH750.css';
import './dest/css/mScreenH650.css';




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

