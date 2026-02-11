import React from "react";
import { Link } from "react-router-dom";

function Card({ data }) {
  const { id, name, image, category, price, introduction } = data;

  return (
    <div className="border border-green-500 rounded-2xl m-3 overflow-hidden h-full">
      <img className="h-60 w-full object-cover" src={image} />
      <div className="flex flex-col w-full h-full bg-green-50 p-6 md:p-3">
        <h3 className="text-green-500 text-2xl ">{name}</h3>

        <div className="grid grid-cols-2 sm:flex sm:flex-col sm:justify-between">
          <p className="text-green-500 font-semibold">
            Category :{" "}
            <span className="text-green-800 text-xl">{category}</span>
          </p>
          <p className="text-green-500 font-semibold">
            Price : <span className="text-green-800 text-xl">{price}</span> $
          </p>
        </div>
        <div className="text-right mr-3 flex items-center justify-end ">
          <Link to={`/products/${id}`}>
            <div className="bg-green-500 w-fit px-3 rounded-lg pb-0.5 text-green-200 mt-3 cursor-pointer hover:bg-white hover:border-green-500 hover:text-green-500 border border-green-500 hover:border">
              More ...
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
