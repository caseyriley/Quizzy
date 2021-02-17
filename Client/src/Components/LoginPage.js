import React, {useState} from 'react';
import LogSign from './LogSign';




const LoginPage = () => {

  const [logSignState, setLogSignState] = useState(true);

  return (
    <div className={"login-main fade-in"} >
      <div className={"login-form-c"} >
        <div className={"login-signup-button"} >
          <div className={"login-button"} onClick={()=>{setLogSignState(true)}} ><span>Login</span></div>
          <div className={"signup-button"} onClick={()=>{setLogSignState(false)}} ><span>Sign Up</span></div>
        </div>
        <LogSign logSignState={logSignState} />
      </div>

    </div>
  )
}
export default LoginPage;