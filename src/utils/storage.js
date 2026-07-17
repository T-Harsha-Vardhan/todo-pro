import { STORAGE_KEY } from "../constants/storage";

export const loadTodos = () => JSON.parse(localStorage.getItem(STORAGE_KEY));

export const saveTodos = (todos) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
