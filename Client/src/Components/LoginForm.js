import React from 'react';

const LoginForm = (props)=>{
  return (
    <div className={"login-form"} >
      <label>
        Email
        <input
        required
        placeholder={"example@website.com"}
        minLength={5} 
        maxLength={150}
        />
      </label>
      <label>
        Password
        <input
        required
        placeholder={"superSecret*"}
        minLength={6} 
        maxLength={150}
        />
      </label>
      <div className={"log-sign-login-button"}>
        <span>Submit</span>
      </div>
      <div className={"log-sign-demo-button"}>
        <span>Demo Login</span>
      </div>
    </div>
  )
}
export default LoginForm;