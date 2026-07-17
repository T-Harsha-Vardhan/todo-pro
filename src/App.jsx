import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import SearchBar from "./components/SearchBar/SearchBar";
import FilterTabs from "./components/FilterTabs/FilterTabs";
import TodoList from "./components/TodoList/TodoList";
import TodoStats from "./components/TodoStats/TodoStats";

const STORAGE_KEY = "todo-pro.todos";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem(STORAGE_KEY);
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
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

  const totalTasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.completed).length;
  const remainingTasks = totalTasks - completedTasks;
  const progress =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const stats = [
    {
      title: "Total",
      value: totalTasks,
    },
    {
      title: "Completed",
      value: completedTasks,
    },
    {
      title: "Remaining",
      value: remainingTasks,
    },
  ];

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
      <TodoStats stats={stats} progress={progress} />
    </main>
  );
};

export default App;
