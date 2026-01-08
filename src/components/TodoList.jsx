import React from "react";
import TodoItem from "./TodoItem";
import { useState } from "react";

function TodoList(props) {
  return (
    <div className="bg-gray-500">
      <ul>
        {props.taskData.map((todo, index) => (
          <TodoItem key={index} text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
