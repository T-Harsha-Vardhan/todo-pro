const EmptyState = () => {
  return (
    <div
      id="empty-state"
      className="flex flex-col justify-center items-center gap-4 py-4"
    >
      <h2 className="text-xl text-center">
        No tasks avaliable currently. <br /> Please start adding your first task
      </h2>
    </div>
  );
};

export default EmptyState;
