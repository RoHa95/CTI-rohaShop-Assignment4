import React, { useState } from "react";
import { data } from "../data";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

function Products() {
  const category = useParams();

  let products = [];
  if (!category.filter) {
    products = data;
  } else if (category.filter === "all") {
    products = data;
  } else {
    products = data.filter((item) => item.category === category.filter);
  }

  return (
    <div className="flex flex-col sm:items-stretch sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-3 mb-10">
      {products.map((item) => (
        <Card data={item} key={item.id} />
      ))}
    </div>
  );
}

export default Products;
