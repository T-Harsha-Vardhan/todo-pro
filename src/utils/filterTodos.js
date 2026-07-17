export const filterTodos = (todos, searchQuery, filter) => {
  console.log(todos);
  return todos
    .filter((todo) =>
      todo.title.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .filter((todo) => {
      switch (filter) {
        case "completed":
          return todo.completed;

        case "active":
          return !todo.completed;

        default:
          return true;
      }
    });
};
