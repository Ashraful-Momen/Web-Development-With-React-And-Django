import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Menu from "./Menu";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";

function BodyComponent() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

export default BodyComponent;
