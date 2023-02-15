import React, { useEffect, useState } from "react";
import { Navbar } from "./components";
import { getNewsData } from "./api";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Main from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
