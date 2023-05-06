import React from "react";

const TodoItem = ({ task, index, handleDelete }) => {
  return (
    <div className="itemTodo">
      <span>{task}</span>
      <button className="button1" onClick={() => handleDelete(index)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
