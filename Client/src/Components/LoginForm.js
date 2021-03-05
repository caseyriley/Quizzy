import React, {useRef} from 'react';
import { API_URL } from '../config';

const LoginForm = (props)=>{
  const email = useRef()
  const password = useRef()

  function loginSubmit(){
    const user = {email: email.current.value, password: password.current.value}
    async function inner(){
      try {
        const response = await fetch(`${API_URL}/users/login`, {
          method: "POST",
          mode: "cors",
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const json = await response.json()
        if (json["token"]){
          console.log("JSON", json)
          document.cookie = json["token"];
          document.location.reload();
        } else {
          console.log("Error in login: 409")
        }
      } catch (error){
        console.log("Error in login: ", error)
      }
    }
    inner()
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
      <div className={"log-sign-login-button"} onClick={loginSubmit}>
        <span>Submit</span>
      </div>
      <div className={"log-sign-demo-button"} >
        <span>Demo Login</span>
      </div>
    </div>
  )
}
export default LoginForm;