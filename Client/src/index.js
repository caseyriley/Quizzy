import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';
import './styles/navbar.css';
import './styles/addModal.css';
import './styles/scoreModal.css';
import './styles/loginPage.css';
import './styles/mScreenW300.css';
import './styles/mScreenW400.css';
import './styles/mScreen750.css';
import App from './App';
import LoginPage from './Components/LoginPage';



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

