const TodoStats = () => {
  return (
    <section
      id="todo-stats"
      className="flex justify-around gap-4 mt-4 mx-4 p-4 bg-gray-200 rounded-lg"
    >
      <p className="flex flex-col items-center">
        <span>Total</span> <span>3</span>
      </p>
      <p className="flex flex-col items-center">
        <span>Completed</span> <span>1</span>
      </p>
      <p className="flex flex-col items-center">
        <span>Remaining</span> <span>2</span>
      </p>
    </section>
  );
};

export default TodoStats;
