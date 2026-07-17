import CircularProgress from "../CircularProgress/CircularProgress";
import StatCard from "../StatCard/StatCard";

const TodoStats = ({ stats, progress }) => {
  return (
    <section
      id="todo-stats"
      className="flex flex-col items-center gap-4 mt-4 mx-4 p-4 bg-gray-200 rounded-lg"
    >
      <div className="flex justify-around w-full">
        {stats.map((stat) => (
          <StatCard key={stat.title} stat={stat} />
        ))}
      </div>
      <CircularProgress
        percentage={progress}
        size={250}
        strokeWidth={18}
        color="#10b981"
        trackColor="#d1d5db"
      >
        <div className="text-center">
          <p className="text-4xl font-bold mb-4">{progress} %</p>
          <p className="text-sm">Completed</p>
        </div>
      </CircularProgress>
    </section>
  );
};

export default TodoStats;
