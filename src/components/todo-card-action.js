import React from "react";

const TodoCardAction = ({ status }) => (
  <div className="d-flex">
    {/* update status button */}
    {status === 0 ? (
      <i
        className="bi bi-check-lg text-success"
        style={{ fontSize: 14, cursor: "pointer" }}
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="is done?"
      ></i>
    ) : (
      <i
        className="bi bi-x-lg text-danger"
        style={{ fontSize: 14, cursor: "pointer" }}
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="is not done?"
      ></i>
    )}

    {/* update button */}
    <i
      className="bi bi-pencil-fill text-primary"
      style={{ fontSize: 14, marginLeft: 15, cursor: "pointer" }}
      data-bs-toggle="tooltip"
      data-bs-placement="bottom"
      title="edit"
    ></i>

    {/* remove button */}
    {status === 0 && (
      <i
        className="bi bi-trash3 text-danger"
        style={{ fontSize: 14, marginLeft: 15, cursor: "pointer" }}
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="remove"
      ></i>
    )}
  </div>
);

export default TodoCardAction;
