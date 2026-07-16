import EmptyState from "../EmptyState/EmptyState";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos }) => {
  return (
    <section
      id="todo-list"
      className="border-2 border-gray-300 mx-4 p-4 rounded-lg overflow-x-hidden overflow-y-auto flex flex-col gap-4"
    >
      {todos && todos.length ? (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <EmptyState />
      )}
    </section>
  );
};

export default TodoList;
