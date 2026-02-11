import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="bg-green-500 flex items-center justify-between h-10 w-full">
      <div className="flex items-center w-full justify-between max-w-5xl mx-auto">
        <div className="font-bold text-green-200"><Link to="/">RoHa.Shop</Link></div>
        <ul className="flex items-center gap-x-3 ">
          <li className="hover:cursor-pointer hover:text-green-200">
            <Link to="/products">Products</Link>
          </li>
          <li className="hover:cursor-pointer hover:text-green-200">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
