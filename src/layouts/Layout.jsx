import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-[calc(100vh-80px)] max-w-5xl mx-auto">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}

export default Layout;
