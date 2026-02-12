import React from "react";
import ImageHeader from "../components/ImageHeader";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex mb-10 h-full flex-col sm:flex-row-reverse sm:items-center sm:justify-between w-full">
      <ImageHeader />

      <div className="mx-6 ">
        <div>
          <h1 className="text-4xl mb-4 text-green-600 font-semibold">
            {" "}
            Craving something delicious?{" "}
          </h1>
          <h3 className="text-2xl text-green-400 font-semibold">
            {" "}
            Order now and get it delivered fast{" "}
          </h3>
        </div>
        <div className="bg-green-500 w-fit px-5 pt-1 pb-1.5 rounded-lg border border-green-500 mt-5 cursor-pointer text-green-200
        hover:bg-white hover:text-green-500">
          <Link to="/products">See Our Menu</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
