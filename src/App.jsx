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
    title: "Ashluxe Yoga Mat II",
    price: "₦50,000",
    image: "/images/yoga-mat.jpg",
  },
  {
    id: 3,
    title: "High Fashion Yoga Mat",
    price: "₦150,000",
    image: "/images/yoga-mat.jpg",
  },
  {
    id: 4,
    title: "Coleman Hess Yoga Mat 4",
    price: "₦20,000",
    image: "/images/yoga-mat.jpg",
  },
  {
    id: 5,
    title: "Brownmark Yoga Mat 5",
    price: "₦10,000",
    image: "/images/yoga-mat.jpg",
  },
  {
    id: 6,
    title: "MojiAkin Yoga Mat 6",
    price: "₦5,000",
    image: "/images/yoga-mat.jpg",
  },
  {
    id: 7,
    title: "UleHomes Yoga Mat 7",
    price: "₦25,000",
    image: "/images/yoga-mat.jpg",
  },
  {
    id: 8,
    title: "El-Pee Yoga Mat 8",
    price: "₦100,000",
    image: "/images/yoga-mat.jpg",
  },
  {
    id: 9,
    title: "Pink House Yoga Mat 9",
    price: "₦3,000",
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
    element: <ProductDescription productsList={productsList} />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
