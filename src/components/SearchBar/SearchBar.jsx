import { useEffect, useRef, useState } from "react";

const SearchBar = ({ onSearchChange }) => {
  const inputRef = useRef(null);
  const timeoutRef = useRef(null);

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (inputValue === "") {
        onSearchChange("");
        return;
      }
    }, 300);

    return () => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    };
  }, [inputValue, onSearchChange]);

  return (
    <input
      ref={inputRef}
      type="search"
      name="search"
      id="search"
      placeholder="🔍 search tasks (Ctrl+K)"
      className="border-2 border-gray-300 min-h-10 px-2 mx-4 rounded-lg"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};
export default SearchBar;
