import { useCallback, useEffect, useState } from "react";
import { loadTodos, saveTodos } from "../utils/storage";

function useTodos() {
  const [todos, setTodos] = useState(() => loadTodos());

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const createTodo = useCallback((title) => {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) return;

    const newTodo = {
      id: Date.now(),
      title: trimmedTitle,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  }, []);

  const updateTodo = useCallback((id, value) => {
    const trimmed = value.trim();

    if (!trimmed) return;

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: trimmed } : todo,
      ),
    );
  }, []);

  const toggleTodo = useCallback((id) => {
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
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  return {
    todos,
    createTodo,
    updateTodo,
    toggleTodo,
    deleteTodo,
  };
}

export default useTodos;
