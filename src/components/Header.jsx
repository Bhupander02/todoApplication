import { useState } from "react";

function TodoItem({ todo, onDelete, onToggle, onEdit, onSave }) {
  const [editText, setEditText] = useState(todo.text);

  // console.log(props.info);
  return (
    <li
      className={`flex outline outline-purple-400 items-center text-2xl justify-between px-3 py-2 rounded-lg ${
        todo.completed ? "opacity-50 line-through" : ""
      }`}
    >
      {todo.isEditing ? (
        <input
          className="flex-1 px-2 py-1 rounded bg-gray-600 outline-none"
          defaultValue={todo.text}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => {
            e.key === "Enter" && onSave(todo.id, editText);
          }}
        />
      ) : (
        <span
          className="cursor-pointer flex-1"
          onClick={() => onToggle(todo.id)}
        >
          {todo.text}
        </span>
      )}

      <div className="flex gap-2 ml-3">
        {todo.isEditing ? (
          <button className="ml-3" onClick={() => onSave(todo.id, editText)}>
            Save
          </button>
        ) : (
          <button
            className="text-red-400 hover:text-red-500"
            onClick={() => onEdit(todo.id)}
          >
            Edit
          </button>
        )}

        <button
          className=" text-red-400 hover:text-red-500"
          onClick={() => onDelete(todo.id)}
        >
          del
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
