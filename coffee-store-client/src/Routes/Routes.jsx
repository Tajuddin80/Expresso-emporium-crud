import { createBrowserRouter } from "react-router";
import HomeLayout from "../AllLayouts/HomeLayout/HomeLayout";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import PopularProductDetails from "../pages/PopularProductDetails/PopularProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: `/productdetails/:id`,
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: PopularProductDetails,
      },
    ],
  },
]);
