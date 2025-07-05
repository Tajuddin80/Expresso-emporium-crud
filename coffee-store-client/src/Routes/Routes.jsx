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
        loader: () => fetch("https://coffee-store-server-eta-black.vercel.app/coffees"),
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: `/productdetails/:id`,
        loader: () => fetch("https://coffee-store-server-eta-black.vercel.app/coffees"),
        Component: PopularProductDetails,
      },
      {
        path: `/updateCoffee/:id`,
        loader: ({ params }) => fetch(`https://coffee-store-server-eta-black.vercel.app/${params.id}`),
        Component: UpdateCoffee,
      },
      // {
      //   path: "signin",
      //   element: <SignIn></SignIn>,
      // },
      // {
      //   path: "signup",
      //   element: <SignUp></SignUp>,
      // },
    ],
  },
]);
