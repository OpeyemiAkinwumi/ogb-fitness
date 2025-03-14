import { NavLink } from "react-router";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div
        className="w-full h-[240px] lg:h-[180px] flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgb(253, 172, 7, 0.8), rgb(253, 172, 7, 0.8) ), url(images/footer.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[92%] lg:w-4/5 h-full flex flex-col lg:flex-row justify-center lg:justify-between items-center text-white space-y-4">
          <h3 className="font-primary text-center lg:text-left text-xl lg:text-2xl leading-tight ">
            Quality Gear, <br />
            Exceptional Results
          </h3>
          <button className="bg-white rounded-full px-4 py-2 text-primary font-primary text-xs lg:text-sm drop-shadow-md ">
            Get yours today
          </button>
        </div>
      </div>
      <footer className="w-full h-auto lg:h-[500px] flex justify-center items-center py-20 bg-dark text-white">
        <div className="w-[92%] lg:w-4/5 h-full font-secondary flex flex-col justify-start items-center ">
          <div className="w-full grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_2fr] space-y-5 lg:space-y-0 ">
            <h5 className="font-primary col-start-1 col-span-2 lg:col-start-auto  lg:col-auto text-center lg:text-left ">
              Logo
            </h5>
            <ul className="text-xs  text-center lg:text-left space-y-2">
              <li>
                <NavLink to="/product" className="font-medium text-sm ">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/product"
                  className="text-gray-300 font-light hover:text-primary duration-300"
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/product"
                  className="text-gray-300 font-light hover:text-primary duration-300"
                >
                  New arrivals
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/product"
                  className="text-gray-300 font-light hover:text-primary duration-300"
                >
                  Shop Now
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/product"
                  className="text-gray-300 font-light hover:text-primary duration-300"
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/product"
                  className="text-gray-300 font-light hover:text-primary duration-300"
                >
                  Categories
                </NavLink>
              </li>
            </ul>
            <ul className="text-xs space-y-2 text-center lg:text-left">
              <li>
                <NavLink to="/product" className="font-medium text-sm ">
                  Company
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/product"
                  className="text-gray-300 font-light hover:text-primary duration-300"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/product"
                  className="text-gray-300 font-light hover:text-primary duration-300"
                >
                  Why choose us?
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/product"
                  className="text-gray-300 font-light hover:text-primary duration-300"
                >
                  Testimonials
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/product"
                  className="text-gray-300 font-light hover:text-primary duration-300"
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/product"
                  className="text-gray-300 font-light hover:text-primary duration-300"
                >
                  Categories
                </NavLink>
              </li>
            </ul>

            <div className="col-start-1 col-span-2 lg:col-start-auto  lg:col-auto  flex flex-col justify-start items-center lg:items-end space-y-5">
              <h5 className="font-medium ">Socials</h5>
              <div className="flex justify-center lg:justify-end items-center gap-7 ">
                <a href="#">
                  <IoLogoInstagram className="text-gray-300 font-light hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="text-gray-300 font-light hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaXTwitter className="text-gray-300 font-light hover:text-primary duration-300" />
                </a>
              </div>
              <p className="text-center lg:text-right text-gray-300 font-light text-xs leading-tight">
                Block B, Crescent Estate <br />
                Victoria Island, Lagos Nigeria.
              </p>
              <p className="text-center lg:text-right text-gray-300 font-light text-xs leading-tight">
                0811 467 9390
              </p>
            </div>
          </div>
          <div className="w-[92%] lg:w-4/5 flex flex-col justify-center items-center font-secondary mt-20 lg:mt-auto space-y-3">
            <hr className="h-px bg-gray-300 border-0 opacity-70 w-4/5 " />
            <p className="text-center text-gray-300 font-light text-xs leading-tight">
              &copy; 2025 OGB Fitness Inc. All Rights Reserved{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
