import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <h1 className="font-medium text-xl">E-COMMERCE</h1>
      </Link>
      <ul className="hidden sm:flex gap-5 text-xs text-gray-700 ">
        <NavLink to="/" className=" flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className=" w-2/4 border-none bg-gray-700 h-[2px] hidden" />
        </NavLink>
        <NavLink to="/collection" className=" flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className=" w-2/4 border-none bg-gray-700 h-[2px] hidden" />
        </NavLink>
        <NavLink to="/about" className=" flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className=" w-2/4 border-none bg-gray-700 h-[2px] hidden" />
        </NavLink>
        <NavLink to="/contact" className=" flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className=" w-2/4 border-none bg-gray-700 h-[2px] hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5" alt="" />
        <div className="group relative">
          <img src={assets.profile_icon} className="w-5" alt="" />
          <div className="absolute pt-4 dropdown-menu right-0">
            <div className="flex flex-col w-40 text-gray-500 bg-[#F8F8F8] rounded px-5 py-3 gap-2">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] aspect-square text-[10px] rounded-full w-4 text-center bg-black text-white">
            1
          </p>
        </Link>
        <img src={assets.menu_icon} className="sm:hidden w-5" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
