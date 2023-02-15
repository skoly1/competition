import React, { useEffect, useState } from "react";
import { Navbar } from "./components";
import { getNewsData } from "./api";
import { RouterProvider } from "react-router-dom";
import { router as indexRouter } from "./pages/index";
import "./App.css";
// import Main from "./pages";

function App() {
  return (
    <>
      <RouterProvider router={indexRouter} />
    </>
  );
}

export default App;
