import Header from "./myComponents/Header.tsx";
import Footer from "./myComponents/Footer.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./myComponents/Home.tsx";
import About from "./myComponents/About.tsx";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <Header title="Task Management" />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
