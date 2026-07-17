import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import SearchBar from "./components/SearchBar/SearchBar";
import FilterTabs from "./components/FilterTabs/FilterTabs";
import TodoList from "./components/TodoList/TodoList";
import TodoStats from "./components/TodoStats/TodoStats";
import { filterTodos } from "./utils/filterTodos";
import { stats } from "./utils/createStats";
import { loadTodos, saveTodos } from "./utils/storage";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = loadTodos();
    return storedTodos ? storedTodos : [];
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

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

  const handleUpdateTodo = (id, value) => {
    const trimmed = value.trim();

    if (!trimmed) return;

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: trimmed } : todo,
      ),
    );
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

  const filteredTodos = filterTodos(todos, searchQuery, filter);

  const { statsData, progress } = stats(todos);

  return (
    <main className="h-full lg:h-screen lg:w-screen lg:max-h-screen overflow-x-hidden flex flex-col py-8 max-w-5xl mx-auto">
      <Header />
      <TodoForm onCreateTodo={handleCreateTodo} />
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      <FilterTabs filter={filter} onFilterChange={handleFilterChange} />
      <TodoList
        todos={filteredTodos}
        onUpdate={handleUpdateTodo}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
      <TodoStats stats={statsData} progress={progress} />
    </main>
  );
};

export default App;
