const FILTERS = ["all", "active", "completed"];

const FilterTabs = ({ filter, onFilterChange }) => {
  return (
    <section id="filters" className="py-4 mx-4 flex gap-4">
      {FILTERS.map((filterItem, idx) => {
        return (
          <button
            key={idx}
            className={`border-2 border-gray-300 px-4 py-1 rounded-full cursor-pointer ${filter === filterItem ? "bg-blue-500 text-white border-transparent" : ""}`}
            onClick={() => onFilterChange(filterItem)}
          >
            {filterItem.slice(0, 1).toUpperCase() + filterItem.slice(1)}
          </button>
        );
      })}
    </section>
  );
};

export default FilterTabs;
