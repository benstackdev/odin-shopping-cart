const circleStyles = {
  strokeDasharray: '1, 200',
  strokeLinecap: "round",
  animation: 'dash4 1.5s ease-in-out infinite'
};

const Loading = () => {
  return (
    <svg viewBox="0 0 50 50" style={{ animation: 'rotate4 1s linear infinite' }}>
      <circle r="5" cy="50%" cx="50%" className={`fill-none stroke-gray-800 stroke-1`} style={circleStyles}></circle>
    </svg>
  );
};

export { Loading };