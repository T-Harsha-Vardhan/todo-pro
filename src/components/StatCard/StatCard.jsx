const StatCard = ({ stat }) => {
  return (
    <p className="flex flex-col items-center">
      <span>{stat.title}</span> <span>{stat.value}</span>
    </p>
  );
};

export default StatCard;
