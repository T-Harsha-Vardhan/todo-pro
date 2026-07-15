const TodoItem = ({ todo }) => {
  return (
    <div className="border-2 border-gray-200 p-2 rounded-lg">{todo.title}</div>
  );
};

export default TodoItem;
