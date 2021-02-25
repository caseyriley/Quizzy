import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const LogSign = (props) => {

  return (
    <>
    { props.logSignState ?
      <LoginForm/>
      :
      <SignupForm/>
    }
    </>
  )
}
export default LogSign;