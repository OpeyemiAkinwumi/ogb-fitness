import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Slider from "react-slick";
// import { baseUrl } from "./config";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useParams } from "react-router";

// const baseUrl = `images/`;

// function ProductDescription({ productList }) {
function ProductDescription({ data }) {
  // const { id, title, description, price, image, gallery } = productList[0];
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
      <section className="w-full h-screen flex justify-center items-center">
        <div className="w-4/5 h-full flex justify-between items-center">
          <p>Picture go dey here</p>
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p>{description}</p>
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
