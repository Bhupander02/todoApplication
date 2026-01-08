import TodoItem from "./TodoItem";

function TodoList({taskData, onDelete, onToggle, onEdit, onSave}) {
  return (
    <div className="bg-gray-600 rounded-lg p-2">
      <ul className="p-4 space-y-2">
        {taskData.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle}
            onEdit={onEdit}
            onSave={onSave}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
