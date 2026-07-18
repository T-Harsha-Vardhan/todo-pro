import { useEffect, useMemo, useState } from "react";
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
  const [highlightedTodoId, setHighlightedTodoId] = useState(null);

  const { todos, createTodo, updateTodo, deleteTodo, toggleTodo } = useTodos();

  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    if (highlightedTodoId === null) return;

    const id = setTimeout(() => {
      setHighlightedTodoId(null);
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, [highlightedTodoId]);

  const handleCreateTodo = (title) => {
    const newTodoCreated = createTodo(title);
    setHighlightedTodoId(newTodoCreated.id);
  };

  const filteredTodos = useMemo(() => {
    return filterTodos(todos, searchQuery, filter);
  }, [todos, searchQuery, filter]);

  const { statsData, progress } = stats(todos);

  return (
    <main className="h-full lg:h-screen lg:w-screen lg:max-h-screen overflow-x-hidden flex flex-col py-8 max-w-5xl mx-auto">
      <Header />
      <TodoForm onCreateTodo={handleCreateTodo} />
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <FilterTabs filter={filter} onFilterChange={setFilter} />
      <TodoList
        todos={filteredTodos}
        onUpdate={updateTodo}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        lastAddedTodo={highlightedTodoId}
      />
      <TodoStats stats={statsData} progress={progress} />
    </main>
  );
};

export default App;
