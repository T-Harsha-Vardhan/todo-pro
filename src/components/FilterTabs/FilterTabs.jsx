const FilterTabs = () => {
  return (
    <section id="filters" className="py-4 mx-4 flex gap-4">
      <button className="border-2 border-gray-300 px-4 py-1 rounded-full cursor-pointer">
        All
      </button>
      <button className="border-2 border-gray-300 px-4 py-1 rounded-full cursor-pointer">
        Active
      </button>
      <button className="border-2 border-gray-300 px-4 py-1 rounded-full cursor-pointer">
        Completed
      </button>
    </section>
  );
};

export default FilterTabs;
