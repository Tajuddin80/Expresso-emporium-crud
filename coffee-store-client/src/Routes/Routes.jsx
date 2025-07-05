import { createBrowserRouter } from "react-router";
import HomeLayout from "../AllLayouts/HomeLayout/HomeLayout";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import PopularProductDetails from "../pages/PopularProductDetails/PopularProductDetails";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";

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
      {
        path: `/updateCoffee/:id`,
        loader: ({ params }) => fetch(`http://localhost:3000/${params.id}`),
        Component: UpdateCoffee,
      },
    ],
  },
]);
