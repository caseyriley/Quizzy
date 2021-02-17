import React from 'react';

const LogSign = (props) => {

  return (
    <>
    { props.logSignState ?
      <div className={"login-form"} >

      </div>
      :
      <div className={"signup-form"} >

      </div>
    }
    </>
  )
}
export default LogSign;