import React from "react";

const Header = () => (
  <div
    className="d-flex justify-content-center align-items-center bg-dark py-6"
    style={{ width: "100%", height: "42px" }}
  >
    <h4 className="text-light m-0 p-0">
      Todo App &nbsp; <i className="bi bi-list-task text-light"></i>
    </h4>
  </div>
);

export default Header;
