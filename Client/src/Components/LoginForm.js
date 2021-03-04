import React, {useRef} from 'react';

const LoginForm = (props)=>{
  const email = useRef()
  const password = useRef()

  function loginSubmit(){
    const user = {email: email, password: password}
  }
  return (
    <div className={"login-form"} >
      <label>
        Email
        <input
        ref={email}
        required
        placeholder={"example@website.com"}
        minLength={5} 
        maxLength={150}
        />
      </label>
      <label>
        Password
        <input
        ref={password}
        required
        placeholder={"superSecret*"}
        minLength={6} 
        maxLength={150}
        />
      </label>
      <div className={"log-sign-login-button"}>
        <span>Submit</span>
      </div>
      <div className={"log-sign-demo-button"} onClick={loginSubmit}>
        <span>Demo Login</span>
      </div>
    </div>
  )
}
export default LoginForm;