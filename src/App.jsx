import React from "react";
import {
  Navbar,
  Hero,
  Bio,
  Projects,
  Skills,
  TechnicalWriting,
  Footer,
} from "./components";

const App = () => {
  return (
    <main>
      <Navbar />
      <section id="Hero">
        <Hero />
      </section>
      <section id="Bio">
        <Bio />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="TechnicalWriting">
        <TechnicalWriting />
      </section>
      <Footer />
    </main>
  );
};

export default App;
