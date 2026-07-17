import { Check, PencilIcon, Trash, X } from "lucide-react";
import { useState } from "react";

const TodoItem = ({ todo, onUpdate, onToggle, onDelete }) => {
  let [isEditing, setIsEditing] = useState(false);
  let [editValue, setEditValue] = useState(todo.title);

  const handleStartEditing = () => {
    setEditValue(todo.title);
    setIsEditing(true);
  };

  const handleChangeEditValue = (e) => {
    setEditValue(e.target.value);
  };

  const handleCancel = () => {
    setEditValue(todo.title);
    setIsEditing(false);
  };

  const handleSave = () => {
    const trimmed = editValue.trim();

    if (!trimmed) {
      handleCancel();
      return;
    }

    onUpdate(todo.id, trimmed);

    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
      return;
    }

    if (e.key === "Escape") {
      handleCancel();
    }
  };

  return (
    <li className="border-2 border-gray-200 p-2 rounded-lg flex gap-4 items-center">
      <div className="flex-1 flex items-center gap-2">
        <input
          type="checkbox"
          name="completed"
          id={`todo-${todo.id}`}
          className="w-5 h-5 accent-green-600 cursor-pointer rounded border-gray-300 focus:ring focus:ring-blue-100"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {!isEditing ? (
          <span
            className={`flex-1 transition-all ${
              todo.completed ? "line-through opacity-60 text-gray-500" : ""
            }`}
          >
            {todo.title}
          </span>
        ) : (
          <input
            aria-label="Edit todo"
            type="text"
            value={editValue}
            onChange={handleChangeEditValue}
            onKeyDown={handleKeyDown}
            className="flex-1"
          />
        )}
      </div>

      <div className="flex gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="cursor-pointer"
              aria-label="Save Todo"
            >
              <Check size={18} />
            </button>
            <button
              onClick={handleCancel}
              className="cursor-pointer"
              aria-label="Cancel Todo"
            >
              <X size={18} />
            </button>
          </>
        ) : (
          <button
            onClick={handleStartEditing}
            className="cursor-pointer"
            aria-label="Update Todo"
          >
            <PencilIcon size={18} />
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="cursor-pointer"
          aria-label="Delete Todo"
        >
          <Trash size={18} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
