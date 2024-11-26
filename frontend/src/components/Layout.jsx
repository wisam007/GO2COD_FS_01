import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="bg-green-50">
      <NavBar />
<<<<<<< HEAD
      <main className="mx-auto w-svw max-w-7xl px-4 py-6 sm:px-6 lg:px-8 pt-24">
=======
      <main className="mx-auto w-svw max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
>>>>>>> 2472349f217b5e4588a5673a926f9f8f87454dd2
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
