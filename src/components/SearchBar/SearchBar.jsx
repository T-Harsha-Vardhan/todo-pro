const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <input
      type="search"
      name="search"
      id="search"
      placeholder="🔍 search tasks"
      className="border-2 border-gray-300 min-h-10 px-2 mx-4 rounded-lg"
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};
export default SearchBar;
