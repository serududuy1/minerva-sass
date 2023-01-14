import React from "react";
import { useState, Suspense } from "react";
import { Switch, Route, Link, Routes, BrowserRouter } from "react-router-dom";

import "./assets/css/App.scss";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
