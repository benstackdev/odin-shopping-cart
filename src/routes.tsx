import type { RouteObject } from "react-router";
import { Home } from "./components/Home";
import { Shop } from "./components/Shop";
import { Cart } from "./components/Cart";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: Home
  },
  {
    path: "/shop",
    Component: Shop
  },
  {
    path: "/cart",
    Component: Cart
  }
];

export default routes;