import React from "react";
import { Outlet } from "react-router-dom";

function ProductsLayout() {
  return (
    <div className="mx-3 md:mx-0">
      <div className="flex items-center justify-between">
        <div className="text-3xl font-bold text-green-500 my-4">Products</div>
        <select className="border-2 border-green-500 focus:outline-0 text-green-800 rounded-md w-48 h-8">
          <option className="bg-green-100 text-green-800" value="all">
            All
          </option>
          <option className="bg-green-100 text-green-800" value="meat">
            Meat
          </option>
          <option className="bg-green-100 text-green-800" value="nodels">
            Nodels
          </option>
          <option className="bg-green-100 text-green-800" value="fastfood">
            FastFood
          </option>
        </select>
      </div>

      <Outlet />
    </div>
  );
}

export default ProductsLayout;
