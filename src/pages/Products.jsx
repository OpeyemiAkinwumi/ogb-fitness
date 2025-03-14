import { useEffect, useState } from "react";
import { Link } from "react-router";
import Footer from "../components/Footer";

import ProductHeader from "../components/ProductHeader";
// import Spinner from "../components/Spinner";

function Products({ productsList }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  // console.log(isLoading);
  return (
    <>
      <ProductHeader />

      {/* Products section */}
      <div className="w-full h-auto flex justify-center items-center py-10 lg:py-20 font-secondary">
        <div className="w-[92%] lg:w-4/5">
          <div className="w-full flex justify-between items-center mb-5">
            <button className="px-5 py-2  text-xs lg:text-base  border-black border-[1px]">
              FILTER
            </button>
            <button className="px-5 py-2 text-xs lg:text-base  border-black border-[1px]">
              FEATURES
            </button>
          </div>
          <div className="w-full h-full grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-5">
            <div className="w-full h-full hidden lg:block">
              <div>
                <FilterHeader title="Categories" />
                <ul>
                  <li className="font-light text-sm cursor-pointer hover:text-gray-800 mb-3">
                    Yoga & Pilates
                  </li>
                  <li className="font-light text-sm cursor-pointer hover:text-gray-800 mb-3">
                    Cardio Equipments
                  </li>
                  <li className="font-light text-sm cursor-pointer hover:text-gray-800 mb-3">
                    Strength Training
                  </li>
                  <li className="font-light text-sm cursor-pointer hover:text-gray-800 mb-3">
                    Workout Gear
                  </li>
                  <li className="font-light text-sm cursor-pointer hover:text-gray-800 mb-3">
                    Active wears
                  </li>
                  <li className="font-light text-sm cursor-pointer hover:text-gray-800 mb-3">
                    Accessories
                  </li>
                </ul>
              </div>
              <div>
                <FilterHeader title="Size Option" />
                <ul>
                  <button className="px-[10px] py-[4px] mr-3 rounded-md text-sm  border-black border-[1px]">
                    S
                  </button>
                  <button className="px-[10px] py-[4px] mr-3 rounded-md text-sm border-black border-[1px]">
                    M
                  </button>
                  <button className="px-[10px] py-[4px] mr-3 rounded-md text-sm border-black border-[1px]">
                    L
                  </button>
                </ul>
              </div>
              <div>
                <FilterHeader title="Price Filter" />
                <ul>
                  <li className="font-light text-sm cursor-pointer hover:text-gray-800 mb-3">
                    ₦5,000 - ₦50, 000
                  </li>
                  <li className="font-light text-sm cursor-pointer hover:text-gray-800 mb-3">
                    ₦50,000 - ₦200k
                  </li>
                  <li className="font-light text-sm cursor-pointer hover:text-gray-800 mb-3">
                    ₦200k - ₦600k
                  </li>
                  <li className="font-light text-sm cursor-pointer hover:text-gray-800 mb-3">
                    ₦600k - ₦1m
                  </li>
                  <li className="font-light text-sm cursor-pointer hover:text-gray-800 mb-3">
                    ₦1m above
                  </li>
                </ul>
              </div>
            </div>

            {/* The products div */}
            <div className="w-full">
              <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productsList.map((product) => (
                  <ProductCard
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    key={product.id}
                    id={product.id}
                    isLoading={isLoading}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Products;

function FilterHeader({ title }) {
  return (
    <div className="w-full h-[50px] flex justify-start items-center gap-3 my-6">
      <div className="w-[3px] rounded-lg h-full bg-secondary"></div>
      <p className="font-medium">{title}</p>
      <div className="w-[50%] h-px  bg-secondary"></div>
    </div>
  );
}

function ProductCard({ title, price, image, id, isLoading }) {
  return (
    <Link to={`${id}`}>
      <div
        className={`w-full h-auto pb-3 flex flex-col justify-start items-center font-secondary transition-all ease-in-out duration-1000 ${
          isLoading ? "blur-sm opacity-15 " : ""
        }`}
      >
        <div className="w-full h-[230px] ">
          <img
            src={image}
            alt="Products"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-medium text-sm mt-3">{title}</h3>
        <p className="font-semibold text-base text-primary">{price}</p>
      </div>
    </Link>
  );
}
