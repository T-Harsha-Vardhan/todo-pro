import { Trash } from "lucide-react";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="border-2 border-gray-200 p-2 rounded-lg flex items-center">
      <div className="flex-1 flex items-center gap-2">
        <input
          type="checkbox"
          name="completed"
          id={`todo-${todo.id}`}
          className="w-5 h-5 accent-green-600 cursor-pointer rounded border-gray-300 focus:ring focus:ring-blue-100"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span
          className={`transition-all ${
            todo.completed ? "line-through opacity-60 text-gray-500" : ""
          }`}
        >
          {todo.title}
        </span>
      </div>

      <button
        onClick={() => onDelete(todo.id)}
        className="cursor-pointer"
        aria-label="Delete Todo"
      >
        <Trash size={18} />
      </button>
    </li>
  );
};

export default TodoItem;
