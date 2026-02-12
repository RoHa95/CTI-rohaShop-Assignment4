import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { data } from "../data";
import NotFound from "./NotFound";
function ProductDetails() {
  const id = useParams();
  const navigate = useNavigate();
  const product = data.find((item) => item.id == id.id);
  if (!product) {
    return <NotFound />;
  }
  const { name, price, category, image, introduction, details, recipe } =
    product;
  console.log(product);
  const clickHandler = () => {
    navigate("/products");
  };

  return (
    <div className="flex flex-col sm:flex sm:flex-row mb-6">
      <img
        className="sm:w-1/3 sm:h-fit sm:my-auto sm:m-2"
        src={image}
        alt="food-image"
      />
      <div className="flex flex-col sm:m-2">
        <h1 className="text-3xl text-green-700 my-4">{name}</h1>
        <div className="mb-6">
          <div className="bg-green-200 text-green-800 px-2">Introduction :</div>
          <p>{introduction}</p>
        </div>
        <div>
          <div className="bg-green-200 text-green-800 px-2"> Recipe :</div>
          <p>{recipe}</p>
        </div>
        <div
          onClick={clickHandler}
          className="text-green-600 underline underline-offset-3 font-bold hover:text-green-400 mt-3 cursor-pointer"
        >
          Go to Products
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
