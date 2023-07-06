import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import TopContainer from "./TopContainer";
import ProjectDisplay from "../Pages/ProjectDisplay";

import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Experience from "../Pages/Experience";
import Contact from "../Pages/Contact";

import "../Styles/Main.css";

const Main = () => {
  const currentPath = window.location.pathname;

  useEffect(() => {
    console.log("funciona");
    console.log(currentPath);
    document.body.scrollTop = 0;
  }, [currentPath]);
  return (
    <>
      <main>
        <TopContainer />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
};

export default Main;
