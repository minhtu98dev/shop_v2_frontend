import React from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <h1 className="font-medium text-xl">E-COMMERCE</h1>
      </Link>
      <ul className="flex gap-5 text-xs text-gray-700">
        <NavLink to="/" className=" flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className=" w-2/4 border-none bg-gray-700 h-[2px]" />
        </NavLink>
        <NavLink to="/collection" className=" flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className=" w-2/4 border-none bg-gray-700 h-[2px]" />
        </NavLink>
        <NavLink to="/about" className=" flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className=" w-2/4 border-none bg-gray-700 h-[2px]" />
        </NavLink>
        <NavLink to="/contact" className=" flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className=" w-2/4 border-none bg-gray-700 h-[2px]" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5" alt="" />
        <img src={assets.profile_icon} className="w-5" alt="" />
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] aspect-square text-[10px] rounded-full w-4 text-center bg-black text-white">
            1
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
