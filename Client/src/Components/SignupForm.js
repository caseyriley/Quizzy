import React, {useRef, useState} from 'react';
import {API_URL} from './../config';



const SignupForm = (props)=>{
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const language = useRef();
  const [errorState, setErrorState] = useState({email: true, password: true, name: true, language: true});

  function submit(){
    console.log(email.current.value)
      function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
      function validatePassword(password) {
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        return re.test(String(password));
      }

      let prev = {email: true, password: true, name: true, language: true};

      if (validateEmail(email.current.value) === false){
        prev.email = false;
      }
      console.log("validatePassword(password.current.value)", validatePassword(password.current.value))
      if (validatePassword(password.current.value) === false){
        prev.password = false;
      }

      if (name.current.value.length < 2){
        prev.name = false;
      }
      if (prev.email && prev.password && prev.name){
        const user = {"email": email.current.value, "password": password.current.value, "name": name.current.value, "language": language.current.value};
        async function inner(){
          try {
            const response = await fetch(`${API_URL}/users`, {
              method: "POST",
              mode: "cors",
              body: JSON.stringify(user),
              headers: {
                'Content-Type': 'application/json'
              }
            })
            const json = await response.json()
            if (json["token"]){
              console.log("JSON",json)
              document.cookie = json["token"];
              document.location.reload();
            } else {
              console.log("Error in signup: 409")
            }
              
          } catch (error) {
            console.log("Error in signup: ",error )
          }
    
        }
        inner();
      }
      setErrorState(prev);
  }

  return (
    <div className={`signup-form`} >
      <label>
        Email
        <input
        ref={email}
        className={`${errorState.email === false ? 'error' : ''}`}
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
        className={`${errorState.password === false ? 'error' : ''}`}
        required
        placeholder={"superSecret*"}
        minLength={6} 
        maxLength={150}
        />
      </label>
      <label>
        Name
        <input
        ref={name}
        className={`${errorState.name === false ? 'error' : ''}`}
        required
        placeholder={"Casey"}
        minLength={3} 
        maxLength={150}
        />
      </label>
      <label>
        Best coding Language
        <input
        ref={language}
        required
        placeholder={"javasnake"}
        minLength={2} 
        maxLength={150}
        />
      </label>
      <div className={"log-sign-login-button"}>
        <span onClick={submit}>Submit</span>
      </div>
    </div>
  )
}
export default SignupForm;