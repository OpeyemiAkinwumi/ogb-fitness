import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

// import Slider from "react-slick";
// import { baseUrl } from "./config";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
// import { useParams } from "react-router";
import { useState } from "react";

// const baseUrl = `images/`;

const additionalInfo = {
  keyFeatures: [
    {
      feature: "Premium Materials",
      description:
        "Crafted from eco-friendly, non-toxic materials that provide durability and a smooth, cushioned surface for all poses.",
    },
    {
      feature: "Lightweight and Portable",
      description:
        "Easy to carry to the gym, studio, or your favorite outdoor spot with the included Balenciaga-branded carry strap.",
    },
    {
      feature: "Luxury Finish",
      description:
        "Signature Balenciaga logo and sleek design add sophistication to your fitness gear.",
    },
    {
      feature: "Non Slip Surface  ",
      description:
        "Enhanced grip technology ensures stability, even during the sweatiest sessions.",
    },
  ],
  reasonToUse:
    "Step onto a mat that combines cutting-edge performance with the elegance of luxury. Ideal for yoga enthusiasts and fitness lovers who refuse to compromise on style or quality.",
  coreInstructions:
    "Wipe clean with a damp cloth after use. Store in a cool, dry place to maintain longevity.",
  addToCart:
    "Take your practice to the next level with the Balenciaga Yoga Mat. Order yours now and experience luxury in every stretch!",
};

// function ProductDescription({ productList }) {
function ProductDescription() {
  const [quantity, setQuantity] = useState(1);

  // const { productId } = useParams();

  console.log(additionalInfo);

  return (
    <>
      <Navigation color="text-black" />
      {/* <Header /> */}
      {/* <section className="w-full h-screen flex justify-center items-center">
        <div className="w-4/5 h-full flex justify-between items-center">
          <CustomPaging gallery={gallery} />
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </section> */}
      <section className="mb-10 flex h-auto w-full items-center justify-center font-secondary lg:mb-0 lg:h-screen">
        <div className="block h-4/5 w-[92%] items-center justify-between gap-14 lg:flex lg:w-4/5">
          <div className="mb-3 flex h-[350px] w-full flex-col items-start justify-start gap-3 lg:h-full lg:w-1/2">
            <div className="h-[80%] w-full rounded-lg bg-primary"></div>
            <div className="grid h-[20%] w-full grid-cols-4 gap-2">
              <div className="h-full w-full rounded-md bg-secondary"></div>
              <div className="h-full w-full rounded-md bg-secondary"></div>
              <div className="h-full w-full rounded-md bg-secondary"></div>
              <div className="h-full w-full rounded-md bg-secondary"></div>
            </div>
          </div>
          <div className="mt-3 flex flex-col items-start justify-start lg:mt-0 lg:h-full lg:w-1/2 lg:p-3">
            <h1 className="text-2xl font-medium lg:text-4xl">
              Balenciaga Yoga Mat
            </h1>
            <p className="text-darkshade mt-2 text-sm font-light leading-relaxed">
              Unroll style and functionality with the Balenciaga Yoga Mat—where
              premium design meets unparalleled quality. This yoga mat redefines
              your practice with its sleek aesthetics, superior grip, and
              ultimate comfort.
            </p>
            <p className="text-darkshade mt-2 text-sm font-light leading-relaxed">
              Availability:{" "}
              <span className="font-medium text-secondary">In stock</span>
            </p>
            <p className="text-darkshade mt-2 text-sm font-light leading-relaxed">
              Color: <span className="font-medium text-secondary">Orange</span>
            </p>
            <p className="text-darkshade mt-2 text-sm font-light leading-relaxed">
              Size: <span className="font-medium text-secondary">Medium</span>
            </p>

            <h2 className="mt-10 w-auto rounded-lg border-[1px] border-primary px-4 py-1 text-center font-bold text-primary lg:text-2xl">
              ₦50,000
            </h2>

            <div className="mt-5">
              <div className="flex w-full items-center justify-between gap-2">
                <FaArrowAltCircleLeft
                  onClick={() => setQuantity((prev) => prev - 1)}
                  size={20}
                  className="cursor-pointer text-secondary"
                />
                <input
                  type="text"
                  placeholder="0"
                  value={quantity}
                  onChange={(e) => setQuantity(+e.target.value)}
                  className="w-[50px] text-center text-secondary focus:outline-none"
                />
                <FaArrowAltCircleRight
                  onClick={() => setQuantity((prev) => prev + 1)}
                  size={20}
                  className="cursor-pointer text-secondary"
                />
              </div>
              <button className="mt-3 rounded-md bg-secondary px-3 py-1 text-xs font-medium text-white">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full items-center justify-center pb-10 font-secondary lg:h-screen">
        <div className="h-full w-[92%] lg:w-4/5">
          <h1 className="text-2xl font-medium lg:text-2xl">
            Additional Information
          </h1>
          <div className="flex w-full flex-col items-start justify-start">
            <p className="my-4 bg-primary px-3 py-2 font-primary text-[0.6rem] tracking-widest text-white">
              Key Features
            </p>
            <Features info={additionalInfo} />
          </div>

          <div className="mt-10 flex h-auto w-full flex-col items-start justify-start px-1 lg:grid lg:grid-cols-3 lg:gap-x-7 lg:gap-y-10">
            <Others
              info={additionalInfo.reasonToUse}
              title="Why Choose the % Product name %?"
            />
            <Others
              info={additionalInfo.coreInstructions}
              title="Core instructions"
            />
            <Others info={additionalInfo.addToCart} title="Add to Cart" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProductDescription;

function Others({ info, title }) {
  return (
    <div className="flex w-full flex-col items-start justify-start">
      <h3 className="my-4 bg-primary px-3 py-2 font-primary text-[0.6rem] tracking-widest text-white">
        {title}
      </h3>
      <p className="text-sm font-light leading-loose">{info}</p>
    </div>
  );
}

function Features({ info }) {
  const { keyFeatures } = info;
  return (
    <div className="h-auto w-full grid-cols-3 lg:grid lg:gap-x-7 lg:gap-y-10 lg:px-1">
      {keyFeatures.map((item) => (
        <div className="mb-5 w-full lg:mb-0" key={item.feature}>
          <div className="flex h-[40px] w-full items-center justify-start gap-2">
            <div className="h-full w-[1.3px] rounded-full bg-secondary"></div>
            <h3 className="font-medium lg:font-normal text-secondary mr-5 text-sm">{item.feature}</h3>
            <div className="hidden lg:block h-[1.3px] w-[30%] rounded-full bg-secondary"></div>
          </div>
          <p className="text-justify text-xs font-light leading-relaxed lg:leading-loose lg:text-left">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
