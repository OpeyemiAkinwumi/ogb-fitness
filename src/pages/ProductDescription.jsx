import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

// import Slider from "react-slick";
// import { baseUrl } from "./config";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useParams } from "react-router";
import { useState } from "react";

// const baseUrl = `images/`;

// function ProductDescription({ productList }) {
function ProductDescription() {
  const [quantity, setQuantity] = useState(1);

  const { productId } = useParams();

  console.log(productId);

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
      <section className="w-full h-screen flex justify-center font-secondary items-center">
        <div className="w-[92%] lg:w-4/5 h-4/5 block lg:flex justify-between items-center gap-14">
          <div className="w-full h-full bg-blue-500 lg:w-1/2 lg:h-full flex flex-col justify-start items-start gap-3">
            <div className="w-full h-[80%] bg-primary "></div>
            <div className="w-full h-[20%] grid grid-cols-4 gap-2">
              <div className="w-full h-full bg-secondary"></div>
              <div className="w-full h-full bg-secondary"></div>
              <div className="w-full h-full bg-secondary"></div>
              <div className="w-full h-full bg-secondary"></div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:h-full mt-3 lg:mt-0 lg:p-3 flex flex-col justify-start items-start ">
            <h1 className="text-2xl lg:text-4xl font-medium">
              Balenciaga Yoga Mat
            </h1>
            <p className="text-sm text-darkshade leading-relaxed mt-2 font-light">
              Unroll style and functionality with the Balenciaga Yoga Mat—where
              premium design meets unparalleled quality. This yoga mat redefines
              your practice with its sleek aesthetics, superior grip, and
              ultimate comfort.
            </p>
            <p className="text-sm text-darkshade leading-relaxed mt-2 font-light">
              Availability:{" "}
              <span className="font-medium text-secondary">In stock</span>
            </p>
            <p className="text-sm text-darkshade leading-relaxed mt-2 font-light">
              Color: <span className="font-medium text-secondary">Orange</span>
            </p>
            <p className="text-sm text-darkshade leading-relaxed mt-2 font-light">
              Size: <span className="font-medium text-secondary">Medium</span>
            </p>

            <h2 className="w-auto  mt-10  lg:text-2xl text-center font-bold py-1 px-4 text-primary border-[1px] border-primary rounded-lg  ">
              ₦50,000
            </h2>

            <div className=" mt-5">
              <div className="w-full  flex justify-between items-center gap-2">
                <FaArrowAltCircleLeft
                  onClick={() => setQuantity((prev) => prev - 1)}
                  size={20}
                  className="text-secondary cursor-pointer"
                />
                <input
                  type="text"
                  placeholder="0"
                  value={quantity}
                  onChange={(e) => setQuantity(+e.target.value)}
                  className="w-[50px] text-secondary text-center focus:outline-none"
                />
                <FaArrowAltCircleRight
                  onClick={() => setQuantity((prev) => prev + 1)}
                  size={20}
                  className="text-secondary cursor-pointer"
                />
              </div>
              <button className="bg-secondary mt-3 text-xs font-medium text-white px-3 py-1 rounded-md   ">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProductDescription;

// function CustomPaging({ gallery }) {
//   console.log(gallery);

//   const settings = {
//     customPaging: function (i) {
//       return (
//         <a>
//           <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
//         </a>
//       );
//     },
//     dots: true,
//     dotsClass: "slick-dots slick-thumb",
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         {/* <div>
//           <img src={baseUrl + "/abstract01.jpg"} />
//         </div>
//         <div>
//           <img src={baseUrl + "/abstract02.jpg"} />
//         </div>
//         <div>
//           <img src={baseUrl + "/abstract03.jpg"} />
//         </div>
//         <div>
//           <img src={baseUrl + "/abstract04.jpg"} />
//         </div> */}

//         {gallery.map((item) => (
//           <div key={item.id}>
//             <img src={`${baseUrl}/`} alt="" />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }
