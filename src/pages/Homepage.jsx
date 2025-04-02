import Header from "../components/Header";
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

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

const productList = [
  {
    title: `Mega Skipping Rope`,
    // link:
    image: "images/rope.jpg",
    price: "₦10,000",
  },
  {
    title: `Yoga Mat`,
    // link:
    image: "images/yoga-mat.jpg",
    price: "₦40,000",
  },
  {
    title: `Resistant Band`,
    // link:
    image: "images/resistant-band.jpg",
    price: "₦7,000",
  },
  {
    title: "Boxing Glove",
    // link:
    image: "images/boxing-glove.jpg",
    price: "₦150,000",
  },
];

function Homepage() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  function handleShop() {
    navigate("/products");
  }

  return (
    <>
      <Header />

      {/* Section 2 */}
      <section className="w-full h-auto py-20 flex justify-center items-center">
        <div className="w-[92%] lg:w-4/5 h-full">
          <div className="w-full grid gap-6 md:gap-5 lg:gap-8 grid-cols-1 md:grid-cols-3">
            {headlineList.map((item) => (
              <Headlines
                title={item.title}
                key={item.index}
                image={item.image}
                isLoading={isLoading}
              />
            ))}
          </div>
          <HomeHeaders title="TRENDING" description="NEW ARRIVAL" />
          <div className="w-full grid gap-6 md:gap-5 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {productList.map((item) => (
              <ProductHeaders
                title={item.title}
                key={item.index}
                image={item.image}
                price={item.price}
                isLoading={isLoading}
              />
            ))}
          </div>

          <div className="w-full mt-14 flex justify-center items-center">
            <button
              onClick={handleShop}
              className="bg-primary text-white px-5 py-2 text-xl font-primary"
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
          <h3 className="font-primary text-center text-3xl lg:text-4xl mb-7 leading-snug">
            Elevate <br /> Your worout
          </h3>
        }
        description="Experience the difference with high-quality fitness accessories made to last."
      />

      {/* Section 4 (About) */}
      <section className="w-full flex justify-center items-center py-5 lg:py-20">
        <div id="about" className="w-[90%] lg:w-4/5">
          <div className="w-full h-auto  lg:h-[320px] lg:flex flex-row-reverse items-center">
            <HomeHeaders title="About" description="OGB FITNESS" />
            <p className="w-full font-secondary text-sm lg:text-base flex items-center text-justify justify-center">
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
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 py-16">
            <HomeHeaders title="WHY CHOOSE" description="OGB FITNESS" />
            <AboutOptions
              title="Premium Quality"
              description="We source materials that stand the test of time, offering reliability for every workout."
              image="images/premium.jpg"
            />
          </div>
          <div className="w-full h-auto py-5 lg:py-0">
            <AboutOptions
              title="Designed for All"
              description="From beginners to fitness enthusiasts, our products cater to all levels and help you reach your goals."
              image="images/for-all.jpg"
            />
          </div>
          <div className="w-full h-auto py-5 lg:py-0 flex justify-end items-center">
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
          <h3 className="font-primary text-center text-3xl lg:text-4xl mb-7 leading-snug">
            The Tools You Need <br />
            for the Results You Want
          </h3>
        }
        description="At OGB Fitness, we’re here to empower you with the tools you need to achieve greatness. Whether it’s at the gym, at home, or outdoors, let us help you build the lifestyle you deserve."
      />

      {/* Section 6 (Testimonial) */}
      <section className="w-full lg:h-screen flex justify-center items-center py-20">
        <div className="w-[90%] lg:w-4/5 h-full flex flex-col justify-start items-center">
          <h3 className="font-secondary text-3xl font-bold text-center">
            TESTIMONIALS
          </h3>
          <div className="w-4/5 flex justify-between items-center mt-7 lg:mt-auto">
            <div className="w-[25px] hidden lg:flex h-[25px] rounded-full border-primary border-2  justify-center items-center ">
              <HiChevronLeft className="text-primary stroke-[1.5px]" />
            </div>
            <Reviews
              customerName="Hillary Clinton"
              customerImage="images/customer.jpg"
              jobTitle="Junior Frontend Developer"
              review="OGB Fitness gear is premium and durable! Yoga mat, resistance bands, and gloves exceeded expectations. Highly recommend for upgrades!"
            />
            <div className="w-[25px] h-[25px] hidden rounded-full border-primary border-2 lg:flex justify-center items-center ">
              <HiChevronRight className="text-primary stroke-[1.5px]" />
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
    <div className="w-full lg:w-[700px]  lg:h-[500px] lg:flex justify-between items-center">
      <div
        style={{
          backgroundImage: `url(${customerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full lg:w-[330px] h-[300px] lg:h-full mb-5 lg:mb-0 "
      ></div>
      <div className="w-full lg:w-[350px] h-auto lg:h-full flex flex-col justify-center items-center lg:items-start space-y-2">
        <h5 className="font-primary text-secondary">{customerName}</h5>
        <p className="font-secondary text-xs font-medium">{jobTitle}</p>
        <p className="font-secondary text-xs text-center lg:text-left font-light">
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
      className={`w-full h-[230px] flex flex-col justify-center items-start text-white px-12 py-10 transition-all ease-in-out duration-1000 ${
        isLoading ? "blur-sm opacity-15 " : ""
      } `}
    >
      <img src="/images/slash.svg" alt="" />
      <h2 className="text-xl font-secondary max-w-[50%] font-semibold leading-tight mt-5">
        {title}
      </h2>
      <button className="font-primary bg-primary px-4 py-2 text-xs rounded-md mt-auto">
        Upgrade Now
      </button>
    </div>
  );
}

function HomeHeaders({ title, description }) {
  return (
    <div className="mx-auto w-full my-14 flex flex-col justify-center items-center">
      <div className="w-auto flex justify-center items-center gap-3">
        <div className="h-[1px] w-[70px] bg-secondary"></div>
        <p className="text-secondary font-secondary text-xs font-semibold">
          {title}
        </p>
        <div className="h-[1px] w-[70px] bg-secondary"></div>
      </div>
      <h2 className="text-3xl mt-3 font-bold font-secondary">{description}</h2>
    </div>
  );
}

function ProductHeaders({ title, price, image, isLoading }) {
  return (
    <div
      className={`w-full h-[350px] lg:h-[400px] flex flex-col justify-start items-center lg:items-start space-y-2 transition-all ease-in-out duration-1000 ${
        isLoading ? "blur-sm opacity-15 " : ""
      } `}
    >
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-[280px] lg:h-[330px] "
      ></div>
      <h3 className="font-primary text-sm">{title}</h3>
      <p className="font-secondary text-2xl ">{price}</p>
    </div>
  );
}

function Banner({ image, element, description, onClick }) {
  return (
    <section
      className="w-full h-[500px] flex justify-center items-center text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(0,0,0,0.6), rgb(0,0,0,0.6)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[92%] lg:w-4/5 h-full flex flex-col justify-center items-center py-14">
        {element}
        <p className="font-secondary font-light text-xs lg:text-sm  text-center  ">
          {description}
        </p>
        <button
          onClick={onClick}
          className="bg-primary text-white px-5 py-2 text-xs font-primary mt-16"
        >
          BROWSE OUR COLLECTION
        </button>
      </div>
    </section>
  );
}

function AboutOptions({ title, description, image }) {
  return (
    <div className="w-full lg:w-[500px] h-auto lg:h-[350px] space-y-4 lg:space-y-0 lg:flex justify-start gap-3 items-center">
      <div
        className="w-full lg:w-[210px] h-[300px] lg:h-full "
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="w-full lg:w-[250px] h-auto lg:h-full px-4 lg:px-0 flex flex-col  justify-center items-center lg:items-start ">
        <h4 className="font-primary  text-secondary mb-2">{title}</h4>
        <p className="font-secondary text-center lg:text-left  text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
