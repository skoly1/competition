import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

const Layout = () => {
  return (
    <div>
      <Outlet />

      <h1>Footer</h1>
    </div>
  );
};

export default Layout;
