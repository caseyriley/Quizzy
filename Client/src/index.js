import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/navbar.css';
import './styles/addModal.css';
import './styles/loginPage.css';
import './styles/mScreen750.css';
import App from './App';
import LoginPage from './Components/LoginPage';
let loggedIn = false;

ReactDOM.render(
  <React.StrictMode>
    {loggedIn ? <App /> : <LoginPage/>}
  </React.StrictMode>,
  document.getElementById('root')
);
