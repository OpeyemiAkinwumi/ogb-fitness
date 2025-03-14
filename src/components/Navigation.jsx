import { NavLink } from "react-router";
import { HiBars3 } from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";
import { BsCart2 } from "react-icons/bs";
import { useState } from "react";

function Navigation({ color = "text-white" }) {
  const [hidden, setHidden] = useState(true);

  function handleClick() {
    setHidden((hidden) => !hidden);
  }

  return (
    <>
      <nav className="w-full h-[70px] flex justify-center items-center">
        <div className="w-[92%] lg:w-4/5 h-full  flex justify-between items-center  relative z-[999] ">
          <h1 className="font-primary text-2xl">Logo</h1>
          <ul
            className={`hidden lg:flex justify-start items-center gap-5 ${color}`}
          >
            <li>
              <NavLink to="/" className="font-secondary text-sm">
                Home
              </NavLink>
            </li>
            {/* <li>
              <a href="#about" className="font-secondary text-sm">
                About
              </a>
            </li> */}
            <li>
              <NavLink to="/products" className="font-secondary text-sm">
                Products
              </NavLink>
            </li>
          </ul>
          {/* Hamburger icons and dropdown */}
          <div className="flex justify-center items-center gap-3">
            {/* Cart icon */}
            <div
              className={`w-8 h-8 rounded-full ${
                !hidden ? "bg-secondary" : "bg-primary"
              } flex items-center justify-center cursor-pointer  `}
            >
              <BsCart2 size={20} className="text-white" />
            </div>

            {/* Hamburger icon */}
            <div
              onClick={handleClick}
              className={`w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer ${
                !hidden ? "hidden " : "block lg:hidden"
              } `}
            >
              <HiBars3 size={20} className="text-white" />
            </div>

            {/* Cancel icon */}
            <div
              onClick={handleClick}
              className={`w-8 h-8 rounded-full bg-secondary flex items-center justify-center cursor-pointer ${
                hidden ? "hidden" : "block lg:hidden"
              } `}
            >
              <HiXMark size={20} className="text-white" />
            </div>
          </div>
        </div>
      </nav>
      {/* Responsiveness */}
      <div
        className={`w-full h-screen absolute z-[900] top-0 left-0 bg-primary text-white flex  justify-center items-center  ${
          hidden ? "hidden" : "block"
        } `}
      >
        <ul className="w-4/5 h-[60%] pt-[20%] flex flex-col justify-start items-center">
          <li>
            <NavLink to="/" className="font-secondary text-2xl">
              Home
            </NavLink>
          </li>
          <li className="mt-5">
            <NavLink to="/products" className="font-secondary text-2xl ">
              Products
            </NavLink>
          </li>
          <button className="w-4/5 p-3 rounded-md bg-secondary text-white mt-auto font-secondary font-bold">
            ORDERS
          </button>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
