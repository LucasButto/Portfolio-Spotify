import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import TopContainer from "./TopContainer";
import ProjectDisplay from "../Pages/ProjectDisplay";

import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Experience from "../Pages/Experience";
import Contact from "../Pages/Contact";

import "../Styles/Main.css";

const Main = () => {
  const scrollContainerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    scrollContainerRef.current.scrollTop = 0;
  }, [location]);

  return (
    <>
      <main ref={scrollContainerRef}>
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
