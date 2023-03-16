import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Components/About";

import NavHome from "../Components/NavHome";
import Skills from "../Components/Skills";

const Home = () => {
  return (
    <>
      <NavHome />
      <Routes>
        <Route exact path="*" element={<About />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
};

export default Home;
