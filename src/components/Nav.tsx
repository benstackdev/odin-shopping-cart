import { Link } from "react-router";
import { useCartStore } from "../stores/cartStore";

const Nav = () => {
  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <nav className={`flex justify-center`}>
      <ul className={`flex justify-around w-xs m-4 text-xl lg:m-8 lg:text-3xl lg:w-md`}>
        <li><Link to={""} data-testid="home-link">Home</Link></li>
        <li><Link to={"shop"} data-testid="shop-link">Shop</Link></li>
        <li><Link to={"cart"} data-testid="cart-link">My Cart <span>({`${totalItems}`})</span></Link></li>
      </ul>
    </nav>
  );
};

export { Nav };