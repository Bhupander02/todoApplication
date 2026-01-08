import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (!task.trim()) return;

    setTodos([...todos, task]);
    setTask("");
  }

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="w-160 max-w-full rounded-xl">
          <Header />
          <div>
            <div className="bg-purple-400 w-full flex justify-center p-4 text-xl">
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="border-2"
                onKeyDown={(e) => {
                  if(e.key === "Enter") addTodo();
                }}
              />
              <button
                className="border-2 bg-blue-400 rounded-md p-2"
                onClick={addTodo}
              >
                Add
              </button>
            </div>
          </div>
          <TodoList taskData={todos} />
        </div>
      </div>
    </>
  );
}

export default App;
