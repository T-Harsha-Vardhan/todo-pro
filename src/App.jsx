import "./App.css";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import SearchBar from "./components/SearchBar/SearchBar";
import FilterTabs from "./components/FilterTabs/FilterTabs";
import TodoList from "./components/TodoList/TodoList";
import TodoStats from "./components/TodoStats/TodoStats";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

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

  return (
    <main className="h-screen w-screen max-h-screen overflow-x-hidden flex flex-col py-8 max-w-5xl mx-auto">
      <Header />
      <TodoForm onCreateTodo={handleCreateTodo} />
      <SearchBar />
      <FilterTabs />
      <TodoList todos={todos} />
      <TodoStats />
    </main>
  );
};

export default App;
