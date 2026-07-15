import "./App.css";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import SearchBar from "./components/SearchBar/SearchBar";
import FilterTabs from "./components/FilterTabs/FilterTabs";
import TodoList from "./components/TodoList/TodoList";
import TodoStats from "./components/TodoStats/TodoStats";

const todos = [
  {
    id: 1,
    title: "Learn React",
  },
  {
    id: 2,
    title: "Build Todo App",
  },
  {
    id: 3,
    title: "Review PR",
  },
];

const App = () => {
  return (
    <main className="h-screen w-screen max-h-screen overflow-x-hidden flex flex-col py-8 max-w-5xl mx-auto">
      <Header />
      <TodoForm />
      <SearchBar />
      <FilterTabs />
      <TodoList todos={todos} />
      <TodoStats />
    </main>
  );
};

export default App;
