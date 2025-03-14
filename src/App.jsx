import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import ProductDescription from "./pages/ProductDescription";
import "./App.css";

const productsList = [
  {
    id: 1,
    title: "Balenciaga Yoga Mat 1",
    price: "₦50,000",
    image: "/images/yoga-mat.jpg",
    description:
      "Unroll style and functionality with the Balenciaga Yoga Mat—where premium design meets unparalleled quality. This yoga mat redefines your practice with its sleek aesthetics, superior grip, and ultimate comfort.",
    gallery: ["boxing-glove.jpg", "cardio.jpg", "yoga-mat.jpg", "strength.jpg"],
  },
  {
    id: 2,
    title: "Balenciaga Yoga Mat 2",
    price: "₦50,000",
    image: "/images/yoga-mat.jpg",
  },
  {
    id: 3,
    title: "Balenciaga Yoga Mat 3",
    price: "₦50,000",
    image: "/images/yoga-mat.jpg",
  },
  {
    id: 4,
    title: "Balenciaga Yoga Mat 4",
    price: "₦50,000",
    image: "/images/yoga-mat.jpg",
  },
  {
    id: 5,
    title: "Balenciaga Yoga Mat 5",
    price: "₦50,000",
    image: "/images/yoga-mat.jpg",
  },
  {
    id: 6,
    title: "Balenciaga Yoga Mat 6",
    price: "₦50,000",
    image: "/images/yoga-mat.jpg",
  },
  {
    id: 7,
    title: "Balenciaga Yoga Mat 7",
    price: "₦50,000",
    image: "/images/yoga-mat.jpg",
  },
  {
    id: 8,
    title: "Balenciaga Yoga Mat 8",
    price: "₦50,000",
    image: "/images/yoga-mat.jpg",
  },
  {
    id: 9,
    title: "Balenciaga Yoga Mat 9",
    price: "₦50,000",
    image: "/images/yoga-mat.jpg",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/products",
    element: <Products productsList={productsList} />,
  },
  {
    path: "/products/:productId",
    element: <ProductDescription productsList={productsList} data={productsList} />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
