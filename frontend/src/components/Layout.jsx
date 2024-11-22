import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div className="px-3 py-1">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
