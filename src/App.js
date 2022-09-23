import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <div>
      hii
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Food-Fun/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
