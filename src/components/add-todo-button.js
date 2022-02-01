import React from "react";

const AddTodoButton = ({ setOpen }) => (
  <h6
    className="text-dark"
    style={{ cursor: "pointer" }}
    onClick={() => setOpen(true)}
  >
    Add Todo
    <i className="bi bi-plus-lg"></i>
  </h6>
);

export default AddTodoButton;
