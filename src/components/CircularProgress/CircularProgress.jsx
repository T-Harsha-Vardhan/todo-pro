const CircularProgress = ({
  percentage,
  size = 200,
  strokeWidth = 12,
  color = "#22c55e",
  trackColor = "#ddd",
  children,
}) => {
  const center = size / 2;

  const radius = (size - strokeWidth) / 2;

  const circumference = 2 * Math.PI * radius;

  const progress = Math.max(0, Math.min(percentage, 100));

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-fit">
      <svg
        aria-hidden="true"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />

        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${center} ${center})`}
          style={{
            transition: "stroke-dashoffset .5s ease",
          }}
        />
      </svg>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </div>
  );
};

export default CircularProgress;
