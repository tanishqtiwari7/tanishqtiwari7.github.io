import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import About from "./components/About.tsx";
import Certifications from "./components/Certifications.tsx";
import CurrentFocus from "./components/CurrentFocus.tsx";
import Footer from "./components/Footer.tsx";
import Hero from "./components/Hero.tsx";
import Loader from "./components/Loader.tsx";
import Navbar from "./components/Navbar.tsx";
import Projects from "./components/Projects.tsx";
import ResumeModal from "./components/ResumeModal.tsx";
import Skills from "./components/Skills.tsx";

function App() {
  const [isResumeOpen, setIsResumeOpen] =
    useState(false);

  const [loadingDone, setLoadingDone] =
    useState(false);

  return (
    <>
      {/* Loader */}
      <AnimatePresence>
        {!loadingDone && (
          <Loader
            onComplete={() =>
              setLoadingDone(
                true,
              )
            }
          />
        )}
      </AnimatePresence>

      {/* Main App */}
      {loadingDone && (
        <div className="bg-white text-neutral-950">
          <Navbar
            onResumeClick={() =>
              setIsResumeOpen(
                true,
              )
            }
          />

          <main className="pt-18">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <CurrentFocus />
            <Certifications />
            <Footer />
          </main>

          <ResumeModal
            open={isResumeOpen}
            onClose={() =>
              setIsResumeOpen(
                false,
              )
            }
          />
        </div>
      )}
    </>
  );
}

export default App;