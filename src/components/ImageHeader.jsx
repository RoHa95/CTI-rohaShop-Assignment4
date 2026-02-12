import React from "react";
import { data } from "../data";

function ImageHeader() {
  const dataimage = data.slice(0, 9);
  return (
    <div className="w-full sm:w-1/2 m-6 grid grid-cols-3 items-stretch ">
      {dataimage.map((item) => (
        <img key={item.id} src={item.image} />
      ))}
    </div>
  );
}

export default ImageHeader;
