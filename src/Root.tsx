import { Link, Outlet } from "react-router";

function Root() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to={""}>Home</Link></li>
            <li><Link to={"shop"}>Shop</Link></li>
            <li><Link to={"cart"}>My Cart</Link></li>
          </ul>
        </nav>
      </header>
      <br />
      <Outlet />
    </>
  );
}

export default Root;
