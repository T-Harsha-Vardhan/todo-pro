import { useState } from "react";

const TodoForm = ({ onCreateTodo }) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onCreateTodo(title);

    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 py-8 px-4"
    >
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="What's needs to be done?..."
        className="border-2 border-gray-300 min-h-10 px-2 rounded-lg flex-32"
        value={title}
        onChange={handleTitleChange}
      />
      <button
        type="submit"
        className="bg-pink-500 hover:bg-pink-700 text-white px-2 h-full min-h-10 rounded-lg flex-auto cursor-pointer"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
