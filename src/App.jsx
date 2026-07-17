import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import SearchBar from "./components/SearchBar/SearchBar";
import FilterTabs from "./components/FilterTabs/FilterTabs";
import TodoList from "./components/TodoList/TodoList";
import TodoStats from "./components/TodoStats/TodoStats";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const handleCreateTodo = (title) => {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) return;

    const newTodo = {
      id: Date.now(),
      title: trimmedTitle,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      ),
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredTodos = todos
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

  return (
    <main className="h-screen w-screen max-h-screen overflow-x-hidden flex flex-col py-8 max-w-5xl mx-auto">
      <Header />
      <TodoForm onCreateTodo={handleCreateTodo} />
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      <FilterTabs filter={filter} onFilterChange={handleFilterChange} />
      <TodoList
        todos={filteredTodos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
      <TodoStats />
    </main>
  );
};

export default App;
