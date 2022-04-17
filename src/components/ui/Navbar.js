import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { startLogout } from "../../firebase/firebase-config";

const Navbar = () => {
  const state = useSelector( state => state.user );
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(startLogout())
  }
    
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand">{ state.name }</span>

      <button className="btn btn-outline-danger" onClick={handleClick}>
        <i className="fas fa-sign-out-alt"></i>
        <span> Logout</span>
      </button>
    </div>
  );
};

export default Navbar;
