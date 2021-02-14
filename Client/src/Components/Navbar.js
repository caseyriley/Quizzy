import React, { useState } from 'react';
import AddModal from './AddModal'

const Navbar = () => {
  const [addModalState, setAddModalState] = useState(false);
  function toggleAddModalState(){
    const prev = !addModalState;
    setAddModalState(prev);
  }
  return(
    <>
      <div className={"navbar-c"}>
        <div className={"navbar-c__option"}>
          <span onClick={toggleAddModalState}>Add New Question</span>
        </div>
      </div>
      {addModalState && <AddModal toggleAddModalState={toggleAddModalState}/>}
    </>
  )
}
export default Navbar;