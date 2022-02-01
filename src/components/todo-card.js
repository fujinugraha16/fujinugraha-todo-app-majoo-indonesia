import React from "react";

// components
import TodoCardAction from "./todo-card-action";

const TodoCard = ({ data: { title, description, status } }) => {
  return (
    <div className="card my-2">
      <div className="card-body text-md-start d-flex justify-content-between align-items-center">
        <div>
          {/* title */}
          <p
            className={
              status === 1
                ? "fw-bolder m-0 text-decoration-line-through"
                : "fw-bolder m-0"
            }
          >
            {title}
          </p>

          {/* description */}
          <p className="fw-light m-0">{description}</p>
        </div>

        <TodoCardAction status={status} />
      </div>
    </div>
  );
};

export default TodoCard;
