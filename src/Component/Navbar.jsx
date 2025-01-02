import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import logo1 from "../assets/images/logo1.png";
import cart from "../assets/images/cart.png";
import storelogo from "../assets/images/storelogo.png";

import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart";
import Select from "react-select";
import { setOptionSelected } from "../features/counter/counterSlice";

const Navbar = ({ setSearchQuery }) => {
  console.log("ASdasd")
  const cart = useSelector((state) => state.counter.cart);
  const dispatch = useDispatch();
  const [isCartOpen, setisCartOpen] = useState(false);

  const handleCart = () => {
    setisCartOpen(!isCartOpen);
  };


 
  return (
    <nav className="bg-gradient-to-r w-full sticky top-0  from-gray-200 to-gray-500 p-4 flex justify-between items-center shadow-md">
      {/* Left side: Logo and Category Selector */}
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <div className="text-white">
          <img src={logo1} alt="logo1"  className="h-12" />{" "}
          {/* Reduced height for cleaner look */}
        </div>

        {/* Select Category */}
       
      </div>

      {/* Right side: Search bar and Cart */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-80 px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />


        <div className="text-white" > LOGIN </div>

        {/* Cart Icon with Badge */}
        <div className="relative">
          {/* Cart SVG */}
          <svg
            onClick={handleCart}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white cursor-pointer hover:scale-105 transition-transform"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.67 0 1.18.655.967 1.297l-.802 2.406m0 0l1.428 7.14a2.25 2.25 0 002.227 1.797h8.186a2.25 2.25 0 002.227-1.797l1.428-7.14m-15.493 0h15.493m-11.25 8.25h6m-4.5 4.5a1.125 1.125 0 11-2.25 0m10.5 0a1.125 1.125 0 11-2.25 0"
            />
          </svg>

          {/* Quantity Badge */}
          {cart.length > 0 && (
            <div className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center shadow-md">
              {cart.length}
            </div>
          )}
        </div>
      </div>

      {/* Cart Drawer */}
      {isCartOpen ? (
        <Cart isCartOpen={isCartOpen} setisCartOpen={setisCartOpen} />
      ) : null}
    </nav>
  );
};

export default Navbar;
