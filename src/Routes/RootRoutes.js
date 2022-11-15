import SingleProduct from "../pages/SingleProduct";

const { createBrowserRouter } = require("react-router-dom");
const { default: Layout } = require("../components/Layout");
const { default: Blogs } = require("../pages/Blogs");
const { default: Home } = require("../pages/Home");
const { default: Products } = require("../pages/Products");

const RootRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "blogs", element: <Blogs /> },
      { path: "/product/:id", element: <SingleProduct /> },
    ],
  },
]);

export default RootRoutes;
