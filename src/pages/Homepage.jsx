import Header from "../components/Header";
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/apiProducts";

const headlineList = [
  {
    title: `STRENGTH TRAINING`,
    // link:
    image: "images/strength.jpg",
  },
  {
    title: `CARDIO EQUIPMENT`,
    image: "images/cardio.jpg",
  },
  { title: `YOGA & PILATES`, image: "images/Yoga.jpg" },
];

// const productList = [
//   {
//     title: `Mega Skipping Rope`,
//     // link:
//     image: "images/rope.jpg",
//     price: "₦10,000",
//   },
//   {
//     title: `Yoga Mat`,
//     // link:
//     image: "images/yoga-mat.jpg",
//     price: "₦40,000",
//   },
//   {
//     title: `Resistant Band`,
//     // link:
//     image: "images/resistant-band.jpg",
//     price: "₦7,000",
//   },
//   {
//     title: "Boxing Glove",
//     // link:
//     image: "images/boxing-glove.jpg",
//     price: "₦150,000",
//   },
// ];

function Homepage() {
  const [four, setFour] = useState([]);
  const navigate = useNavigate();

  const { data: products, isLoading } = useQuery({
    queryKey: ["productsHome"],
    queryFn: getProducts,
  });



  useEffect(() => {
    if (products) {
      setFour(products.slice(0, 4));
    }
  }, [products]);
  console.log(four);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, []);

  function handleShop() {
    navigate("/products");
  }

  return (
    <>
      <Header />

      {/* Section 2 */}
      <section className="flex h-auto w-full items-center justify-center py-20">
        <div className="h-full w-[92%] lg:w-4/5">
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-5 lg:gap-8">
            {headlineList.map((item, index) => (
              <Headlines
                title={item.title}
                key={index}
                image={item.image}
                isLoading={isLoading}
              />
            ))}
          </div>
          <HomeHeaders title="TRENDING" description="NEW ARRIVAL" />
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-8">
            {isLoading ? (
              <p>Loading</p>
            ) : (
              four.map((item) => (
                <ProductHeaders
                  title={item.name}
                  key={item.id}
                  image={item.image}
                  price={item.price}
                  // isLoading={isLoading}
                />
              ))
            )}
          </div>

          <div className="mt-14 flex w-full items-center justify-center">
            <button
              onClick={handleShop}
              className="bg-primary px-5 py-2 font-primary text-xl text-white"
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <Banner
        onClick={handleShop}
        image="images/lady-plank.jpg"
        element={
          <h3 className="mb-7 text-center font-primary text-3xl leading-snug lg:text-4xl">
            Elevate <br /> Your worout
          </h3>
        }
        description="Experience the difference with high-quality fitness accessories made to last."
      />

      {/* Section 4 (About) */}
      <section className="flex w-full items-center justify-center py-5 lg:py-20">
        <div id="about" className="w-[90%] lg:w-4/5">
          <div className="h-auto w-full flex-row-reverse items-center lg:flex lg:h-[320px]">
            <HomeHeaders title="About" description="OGB FITNESS" />
            <p className="flex w-full items-center justify-center text-justify font-secondary text-sm lg:text-base">
              At OGB Fitness, we believe that fitness is more than just a
              routine—it’s a lifestyle. That’s why we’re dedicated to providing
              high-quality fitness accessories designed to support your journey
              to better health and performance. <br /> <br /> Whether
              you&apos;re perfecting your poses on a premium yoga mat, pushing
              limits with resistance bands, or gearing up with durable gloves,
              we ensure every product meets the highest standards of quality,
              durability, and functionality.
            </p>
          </div>
          <div className="grid h-auto w-full grid-cols-1 py-16 md:grid-cols-2">
            <HomeHeaders title="WHY CHOOSE" description="OGB FITNESS" />
            <AboutOptions
              title="Premium Quality"
              description="We source materials that stand the test of time, offering reliability for every workout."
              image="images/premium.jpg"
            />
          </div>
          <div className="h-auto w-full py-5 lg:py-0">
            <AboutOptions
              title="Designed for All"
              description="From beginners to fitness enthusiasts, our products cater to all levels and help you reach your goals."
              image="images/for-all.jpg"
            />
          </div>
          <div className="flex h-auto w-full items-center justify-end py-5 lg:py-0">
            <AboutOptions
              title="Commitment to Excellence"
              description="We’re passionate about delivering value through innovative designs and unmatched customer support."
              image="images/excellence.jpg"
            />
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <Banner
        onClick={handleShop}
        image="images/tools.jpg"
        element={
          <h3 className="mb-7 text-center font-primary text-3xl leading-snug lg:text-4xl">
            The Tools You Need <br />
            for the Results You Want
          </h3>
        }
        description="At OGB Fitness, we’re here to empower you with the tools you need to achieve greatness. Whether it’s at the gym, at home, or outdoors, let us help you build the lifestyle you deserve."
      />

      {/* Section 6 (Testimonial) */}
      <section className="flex w-full items-center justify-center py-20 lg:h-screen">
        <div className="flex h-full w-[90%] flex-col items-center justify-start lg:w-4/5">
          <h3 className="text-center font-secondary text-3xl font-bold">
            TESTIMONIALS
          </h3>
          <div className="mt-7 flex w-4/5 items-center justify-between lg:mt-auto">
            <div className="hidden h-[25px] w-[25px] items-center justify-center rounded-full border-2 border-primary lg:flex">
              <HiChevronLeft className="stroke-[1.5px] text-primary" />
            </div>
            <Reviews
              customerName="Hillary Clinton"
              customerImage="images/customer.jpg"
              jobTitle="Junior Frontend Developer"
              review="OGB Fitness gear is premium and durable! Yoga mat, resistance bands, and gloves exceeded expectations. Highly recommend for upgrades!"
            />
            <div className="hidden h-[25px] w-[25px] items-center justify-center rounded-full border-2 border-primary lg:flex">
              <HiChevronRight className="stroke-[1.5px] text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default Homepage;

// Components
// Components

function Reviews({ customerName, jobTitle, review, customerImage }) {
  return (
    <div className="w-full items-center justify-between lg:flex lg:h-[500px] lg:w-[700px]">
      <div
        style={{
          backgroundImage: `url(${customerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="mb-5 h-[300px] w-full lg:mb-0 lg:h-full lg:w-[330px]"
      ></div>
      <div className="flex h-auto w-full flex-col items-center justify-center space-y-2 lg:h-full lg:w-[350px] lg:items-start">
        <h5 className="font-primary text-secondary">{customerName}</h5>
        <p className="font-secondary text-xs font-medium">{jobTitle}</p>
        <p className="text-center font-secondary text-xs font-light lg:text-left">
          {review}
        </p>
      </div>
    </div>
  );
}

function Headlines({ title, image, isLoading }) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(0,0,0,0.6), rgb(0,0,0,0.6)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`flex h-[230px] w-full flex-col items-start justify-center px-12 py-10 text-white transition-all duration-1000 ease-in-out ${
        isLoading ? "opacity-15 blur-sm" : ""
      } `}
    >
      <img src="/images/slash.svg" alt="" />
      <h2 className="mt-5 max-w-[50%] font-secondary text-xl font-semibold leading-tight">
        {title}
      </h2>
      <button className="mt-auto rounded-md bg-primary px-4 py-2 font-primary text-xs">
        Upgrade Now
      </button>
    </div>
  );
}

function HomeHeaders({ title, description }) {
  return (
    <div className="mx-auto my-14 flex w-full flex-col items-center justify-center">
      <div className="flex w-auto items-center justify-center gap-3">
        <div className="h-[1px] w-[70px] bg-secondary"></div>
        <p className="font-secondary text-xs font-semibold text-secondary">
          {title}
        </p>
        <div className="h-[1px] w-[70px] bg-secondary"></div>
      </div>
      <h2 className="mt-3 font-secondary text-3xl font-bold">{description}</h2>
    </div>
  );
}

function ProductHeaders({ title, price, image, isLoading }) {
  return (
    <div
      className={`flex h-[350px] w-full flex-col items-center justify-start space-y-2 transition-all duration-1000 ease-in-out lg:h-[400px] lg:items-start ${
        isLoading ? "opacity-15 blur-sm" : ""
      } `}
    >
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[280px] w-full lg:h-[330px]"
      ></div>
      <h3 className="font-primary text-sm">{title}</h3>
      <p className="font-secondary text-2xl">{price}</p>
    </div>
  );
}

function Banner({ image, element, description, onClick }) {
  return (
    <section
      className="flex h-[500px] w-full items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(0,0,0,0.6), rgb(0,0,0,0.6)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex h-full w-[92%] flex-col items-center justify-center py-14 lg:w-4/5">
        {element}
        <p className="text-center font-secondary text-xs font-light lg:text-sm">
          {description}
        </p>
        <button
          onClick={onClick}
          className="mt-16 bg-primary px-5 py-2 font-primary text-xs text-white"
        >
          BROWSE OUR COLLECTION
        </button>
      </div>
    </section>
  );
}

function AboutOptions({ title, description, image }) {
  return (
    <div className="h-auto w-full items-center justify-start gap-3 space-y-4 lg:flex lg:h-[350px] lg:w-[500px] lg:space-y-0">
      <div
        className="h-[300px] w-full lg:h-full lg:w-[210px]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex h-auto w-full flex-col items-center justify-center px-4 lg:h-full lg:w-[250px] lg:items-start lg:px-0">
        <h4 className="mb-2 font-primary text-secondary">{title}</h4>
        <p className="text-center font-secondary text-sm lg:text-left">
          {description}
        </p>
      </div>
    </div>
  );
}
