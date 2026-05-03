import type { RouteObject } from "react-router";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";
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