import { Link } from "react-router";

const Nav = () => {
  return (
    <nav className={`flex justify-center`}>
      <ul className={
        `flex justify-around w-xs m-4 text-xl
          lg:m-8 lg:text-3xl lg:w-md`
      }>
        <li><Link to={""}>Home</Link></li>
        <li><Link to={"shop"}>Shop</Link></li>
        <li><Link to={"cart"}>My Cart</Link></li>
      </ul>
    </nav>
  );
};

export { Nav };