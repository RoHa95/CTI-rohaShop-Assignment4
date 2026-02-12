import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Layout from "./layouts/Layout";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import ProductsLayout from "./layouts/ProductsLayout";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState("all");

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route element={<ProductsLayout />}>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route
            path="/products/category/:filter"
            element={<Products />}
          />
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
