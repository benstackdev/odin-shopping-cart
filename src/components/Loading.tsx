const Loading = () => {
  return (
    <svg viewBox="0 0 50 50" className={`svg-animate`}>
      <circle r="5" cy="50%" cx="50%" className={`fill-none stroke-gray-800 stroke-1 circle-animate`}></circle>
    </svg>
  );
};

export { Loading };