import StatCard from "../StatCard/StatCard";

const statsData = [
  {
    id: 1,
    title: "Total",
    value: 3,
  },
  {
    id: 2,
    title: "Completed",
    value: 1,
  },
  {
    id: 3,
    title: "Remaining",
    value: 2,
  },
];

const TodoStats = () => {
  return (
    <section
      id="todo-stats"
      className="flex justify-around gap-4 mt-4 mx-4 p-4 bg-gray-200 rounded-lg"
    >
      {statsData.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </section>
  );
};

export default TodoStats;
