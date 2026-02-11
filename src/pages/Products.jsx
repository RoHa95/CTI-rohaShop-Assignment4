import React from "react";
import { data } from "../data";
import Card from "../components/Card";


function Products() {
  console.log(data);


  return (
    <div className="flex flex-col sm:items-stretch sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-3 mb-10">
      {data.map((item) => (
        <Card data={item} key={item.id} />
      ))}
    </div>
  );
}

export default Products;
