import React, { useState } from "react";
import "./index.css";
import TodoItem from "./todoItem.js";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (newTask !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="wrapper">
      <div className="todoList">
        <input
          className="input"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <button className="button" onClick={handleAdd}>
          Add
        </button>
      </div>
      {tasks.map((task, index) => {
        return (
          <TodoItem
            key={index}
            task={task}
            index={index}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
