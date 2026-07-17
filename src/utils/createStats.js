import { calculateStats } from "./calculateStats";

export const stats = (todos) => {
  return {
    statsData: [
      {
        title: "Total",
        value: calculateStats(todos).totalTasks,
      },
      {
        title: "Completed",
        value: calculateStats(todos).completedTasks,
      },
      {
        title: "Remaining",
        value: calculateStats(todos).remainingTasks,
      },
    ],
    progress: calculateStats(todos).progress,
  };
};
