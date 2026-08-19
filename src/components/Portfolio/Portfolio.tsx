import { useCallback, useEffect, useRef, useState } from "react";

import About from "@/components/About/About";
import BottomNav from "@/components/BottomNav/BottomNav";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import Hero from "@/components/Hero/Hero";
import PlayerBar from "@/components/PlayerBar/PlayerBar";
import ProjectModal from "@/components/ProjectModal/ProjectModal";
import Projects from "@/components/Projects/Projects";
import Sidebar from "@/components/Sidebar/Sidebar";
import Skills from "@/components/Skills/Skills";
import TopBar from "@/components/TopBar/TopBar";
import { navItems } from "@/data";
import { useI18n } from "@/hooks/useI18n";
import type { SectionId } from "@/types/portfolio";
import "./Portfolio.scss";

const Portfolio = () => {
  const { copy } = useI18n();
  const [activeId, setActiveId] = useState<SectionId>("home");
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const topBarRef = useRef<HTMLElement>(null);

  const handleNavigate = useCallback((id: SectionId) => {
    const container = scrollRef.current;
    const target = document.getElementById(id);
    if (!container || !target) return;

    // The top bar floats over the scroll content (position: absolute) and
    // turns opaque once scrolled, so its real height — not a guessed
    // constant — has to be cleared or it covers the section title.
    const topBarHeight = topBarRef.current?.offsetHeight ?? 0;
    const gap = 16;

    container.scrollTo({
      top: target.offsetTop - topBarHeight - gap,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => setScrolled(container.scrollTop > 240);
    onScroll();
    container.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActiveId(visible[0].target.id as SectionId);
      },
      {
        root: container,
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 1],
      },
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      container.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="portfolio">
      <div className="portfolio__body">
        <Sidebar activeId={activeId} onNavigate={handleNavigate} />

        <div className="portfolio__stage">
          <TopBar ref={topBarRef} activeId={activeId} scrolled={scrolled} />

          <main className="portfolio__scroll custom-scroll" ref={scrollRef}>
            <Hero />

            <div className="portfolio__sections">
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Education />
            </div>

            <footer className="portfolio__footer">
              © {new Date().getFullYear()} Lucas Butto · {copy.footer.text}
            </footer>
          </main>
        </div>
      </div>

      <PlayerBar />
      <BottomNav activeId={activeId} onNavigate={handleNavigate} />
      <ProjectModal />
    </div>
  );
};

export default Portfolio;
