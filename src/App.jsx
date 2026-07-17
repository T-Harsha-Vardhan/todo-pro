import { useState } from "react";
import useTodos from "./hooks/useTodos";
import "./App.css";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import SearchBar from "./components/SearchBar/SearchBar";
import FilterTabs from "./components/FilterTabs/FilterTabs";
import TodoList from "./components/TodoList/TodoList";
import TodoStats from "./components/TodoStats/TodoStats";
import { filterTodos } from "./utils/filterTodos";
import { stats } from "./utils/createStats";

const App = () => {
  const { todos, createTodo, updateTodo, deleteTodo, toggleTodo } = useTodos();

  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredTodos = filterTodos(todos, searchQuery, filter);

  const { statsData, progress } = stats(todos);

  return (
    <main className="h-full lg:h-screen lg:w-screen lg:max-h-screen overflow-x-hidden flex flex-col py-8 max-w-5xl mx-auto">
      <Header />
      <TodoForm onCreateTodo={createTodo} />
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <FilterTabs filter={filter} onFilterChange={setFilter} />
      <TodoList
        todos={filteredTodos}
        onUpdate={updateTodo}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
      <TodoStats stats={statsData} progress={progress} />
    </main>
  );
};

export default App;
