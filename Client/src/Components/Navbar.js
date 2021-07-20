import React, { useState } from "react";
import AddModal from "./AddModal";

const Navbar = () => {
  const [addModalState, setAddModalState] = useState(false);
  function toggleAddModalState() {
    const prev = !addModalState;
    setAddModalState(prev);
  }
  function logout() {
    function delete_cookie() {
      document.cookie = "quiz=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
    delete_cookie();
    document.location.reload();
  }
  return (
    <>
      <div className={"navbar-c"}>
        <div className={"navbar-c__option"} onClick={toggleAddModalState}>
          <span>Add New Question</span>
        </div>
        <div className={"navbar-c__option"} onClick={logout}>
          <span>Logout</span>
        </div>
      </div>
      {addModalState && <AddModal toggleAddModalState={toggleAddModalState} />}
    </>
  );
};
export default Navbar;
