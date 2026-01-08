import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (!task.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: task,
        completed: false,
        isEditing: false,
      },
    ]);

    setTask("");
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function editTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }
  function saveTodo(id, newText) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText, isEditing: false } : todo
      )
    );
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-gray-900 text-white">
        <div className="w-[40rem] max-w-full bg-gray-800 rounded-xl shadow-lg text-center p-4">
          <Header />
          <div>
            <div className="w-full flex justify-center gap-3 p-4 text-xl bg-gray-700">
              <input
                type="text"
                value={task}
                placeholder="Add a new Task....."
                onChange={(e) => setTask(e.target.value)}
                className="px-2 py-2 rounded-lg bg-gray-600 text-white outline-none focus:ring-2 focus:ring-purple-400"
                onKeyDown={(e) => {
                  e.key === "Enter" && addTodo();
                }}
              />
              <button
                className="bg-purple-500 rounded-md px-3 py-3"
                onClick={addTodo}
              >
                Add
              </button>
            </div>
          </div>
          <TodoList
            taskData={todos}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
            onEdit={editTodo}
            onSave={saveTodo}
          />
        </div>
      </div>
    </>
  );
}

export default App;
