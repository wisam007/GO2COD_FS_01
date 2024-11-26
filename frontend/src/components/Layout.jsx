import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="bg-green-50">
      <NavBar />
      <main className="mx-auto w-svw max-w-7xl px-4 py-6 sm:px-6 lg:px-8 pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
