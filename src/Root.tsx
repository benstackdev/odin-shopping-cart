import { Outlet } from "react-router";
import { Nav } from "./components/Nav";

function Root() {
  return (
    <div className={`min-h-dvh flex flex-col`}>
      <header>
        <Nav />
      </header>
      <br />
      <div className={`flex flex-col align-center mt-8 flex-1`}>
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
