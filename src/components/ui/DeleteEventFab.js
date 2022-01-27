import React from "react";
import { useDispatch } from "react-redux";
import { eventDeleted } from "../../actions/events";

let className;
const DeleteEventFab = ({ activeEvent }) => {
  const dispatch = useDispatch();

  console.log(activeEvent);

  const handleDelete = () => {
    dispatch(eventDeleted());
  };

  if (activeEvent === null) {
    className = "hidden";
  } else {
    className = "not-hidden";
  }
  return (
    <button
      className={`btn btn-danger fab-danger ${className}`}
      onClick={handleDelete}
    >
      <i className="fas fa-trash"></i>
      <span> Borrar evento </span>
    </button>
  );
};

export default DeleteEventFab;
