import React from 'react';

const LogSign = (props) => {

  return (
    <>
    { props.logSignState ?
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
        <label>
          Name
          <input
          required
          placeholder={"Robert Smith"}
          minLength={3} 
          maxLength={150}
          />
        </label>
        <label>
          Best coding Language
          <input
          required
          placeholder={"javasnake"}
          minLength={2} 
          maxLength={150}
          />
        </label>
        <div className={"log-sign-login-button"}>
          <span>Submit</span>
        </div>
      </div>
      :
      <div className={"signup-form"} >

      </div>
    }
    </>
  )
}
export default LogSign;