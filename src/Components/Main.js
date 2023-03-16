import React from "react";
import { Routes, Route } from "react-router-dom";

import TopContainer from "./TopContainer";

import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Experience from "../Pages/Experience";
import Contact from "../Pages/Contact";

import "../Styles/Main.css";

const Main = () => {
  return (
    <>
      <main className={"main"}>
        <TopContainer />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
};

export default Main;
