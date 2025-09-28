import { Link } from "react-router";
import Footer from "../components/Footer";

import ProductHeader from "../components/ProductHeader";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/apiProducts";
// import Spinner from "../components/Spinner";

function Products() {
  // const [isLoading, setIsLoading] = useState(true);

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  console.log(products, isLoading);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, []);
  // console.log(isLoading);

  return (
    <>
      <ProductHeader />

      {/* Products section */}
      <div className="flex h-auto w-full items-center justify-center py-10 font-secondary lg:py-20">
        <div className="w-[92%] lg:w-4/5">
          <div className="mb-5 flex w-full items-center justify-between">
            <button className="border-[1px] border-black px-5 py-2 text-xs lg:text-base">
              FILTER
            </button>
            <button className="border-[1px] border-black px-5 py-2 text-xs lg:text-base">
              FEATURES
            </button>
          </div>
          <div className="grid h-full w-full grid-cols-1 gap-5 lg:grid-cols-[300px_1fr]">
            <div className="hidden h-full w-full lg:block">
              <div>
                <FilterHeader title="Categories" />
                <ul>
                  <li className="mb-3 cursor-pointer text-sm font-light hover:text-gray-800">
                    Yoga & Pilates
                  </li>
                  <li className="mb-3 cursor-pointer text-sm font-light hover:text-gray-800">
                    Cardio Equipments
                  </li>
                  <li className="mb-3 cursor-pointer text-sm font-light hover:text-gray-800">
                    Strength Training
                  </li>
                  <li className="mb-3 cursor-pointer text-sm font-light hover:text-gray-800">
                    Workout Gear
                  </li>
                  <li className="mb-3 cursor-pointer text-sm font-light hover:text-gray-800">
                    Active wears
                  </li>
                  <li className="mb-3 cursor-pointer text-sm font-light hover:text-gray-800">
                    Accessories
                  </li>
                </ul>
              </div>
              <div>
                <FilterHeader title="Size Option" />
                <ul>
                  <button className="mr-3 rounded-md border-[1px] border-black px-[10px] py-[4px] text-sm">
                    S
                  </button>
                  <button className="mr-3 rounded-md border-[1px] border-black px-[10px] py-[4px] text-sm">
                    M
                  </button>
                  <button className="mr-3 rounded-md border-[1px] border-black px-[10px] py-[4px] text-sm">
                    L
                  </button>
                </ul>
              </div>
              <div>
                <FilterHeader title="Price Filter" />
                <ul>
                  <li className="mb-3 cursor-pointer text-sm font-light hover:text-gray-800">
                    ₦5,000 - ₦50, 000
                  </li>
                  <li className="mb-3 cursor-pointer text-sm font-light hover:text-gray-800">
                    ₦50,000 - ₦200k
                  </li>
                  <li className="mb-3 cursor-pointer text-sm font-light hover:text-gray-800">
                    ₦200k - ₦600k
                  </li>
                  <li className="mb-3 cursor-pointer text-sm font-light hover:text-gray-800">
                    ₦600k - ₦1m
                  </li>
                  <li className="mb-3 cursor-pointer text-sm font-light hover:text-gray-800">
                    ₦1m above
                  </li>
                </ul>
              </div>
            </div>

            {/* The products div */}
            <div className="w-full">
              <div className="grid h-full w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {isLoading ? (
                  <p> Loading</p>
                ) : (
                  products.map((product) => (
                    <ProductCard
                      title={product.name}
                      price={product.price}
                      image={product.image}
                      key={product.id}
                      id={product.id}
                      isLoading={isLoading}
                    />
                  ))
                )}
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
    <div className="my-6 flex h-[50px] w-full items-center justify-start gap-3">
      <div className="h-full w-[3px] rounded-lg bg-secondary"></div>
      <p className="font-medium">{title}</p>
      <div className="h-px w-[50%] bg-secondary"></div>
    </div>
  );
}

function ProductCard({ title, price, image, id, isLoading }) {
  return (
    <Link to={`${id}`}>
      <div
        className={`flex h-auto w-full flex-col items-center justify-start pb-3 font-secondary transition-all duration-1000 ease-in-out ${
          isLoading ? "opacity-15 blur-sm" : ""
        }`}
      >
        <div className="h-[230px] w-full">
          <img
            src={image}
            alt="Products"
            className="h-full w-full object-cover"
          />
        </div>
        <h3 className="mt-3 text-sm font-medium">{title}</h3>
        <p className="text-base font-semibold text-primary">{price}</p>
      </div>
    </Link>
  );
}
