import type { RouteObject } from "react-router";
import { Home } from "./components/Home";
import { Shop } from "./components/Shop";
import { Cart } from "./components/Cart";
import Root from "./Root";

const routes: RouteObject[] = [
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true, // index specifies the root path (no subpath)
        Component: Home
      },
      {
        path: "shop",
        Component: Shop
      },
      {
        path: "cart",
        Component: Cart
      },
    ]
  }
];

export default routes;