const EmptyState = () => {
  return (
    <div
      id="empty-state"
      className="flex flex-col justify-center items-center gap-4 py-4"
    >
      <h2 className="text-xl text-center">
        No tasks avaliable currently. <br /> Please start adding your first task
      </h2>
      <button className="bg-pink-500 text-white p-2 rounded-lg flex-auto cursor-pointer">
        + Create Task
      </button>
    </div>
  );
};

export default EmptyState;
