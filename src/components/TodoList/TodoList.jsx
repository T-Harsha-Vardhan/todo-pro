import React from "react";
import EmptyState from "../EmptyState/EmptyState";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, onUpdate, onToggle, onDelete, lastAddedTodo }) => {
  return (
    <ul
      id="todo-list"
      className="border-2 border-gray-300 mx-4 p-4 rounded-lg overflow-x-hidden overflow-y-auto flex flex-col gap-4 max-h-75"
    >
      {todos && todos.length ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={onUpdate}
            onToggle={onToggle}
            onDelete={onDelete}
            lastAddedTodo={lastAddedTodo}
          />
        ))
      ) : (
        <EmptyState />
      )}
    </ul>
  );
};

export default React.memo(TodoList);
