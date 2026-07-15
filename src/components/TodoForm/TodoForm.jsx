const TodoForm = () => {
  return (
    <form className="flex flex-col sm:flex-row gap-4 py-8 px-4">
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="What's needs to be done?..."
        className="border-2 border-gray-300 min-h-10 px-2 rounded-lg flex-32"
      />
      <button className="bg-pink-500 text-white px-2 h-full min-h-10 rounded-lg flex-auto">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
