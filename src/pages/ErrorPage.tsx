const ErrorPage = () => {
  return (
    <div className={`h-screen w-screen flex flex-col justify-center items-center gap-4 mx-auto`}>
      <h1 className={`font-semibold text-2xl lg:text-4xl`}>
        Oops! This page does not exist.
      </h1>
      <p className={`lg:text-lg text-center`}>If you landed here by accident, please let our developer team know.</p>
    </div>
  );
};

export { ErrorPage };