import React from "react";
import {
  Navbar,
  Hero,
  Bio,
  Projects,
  TechnicalWriting,
  Skills,
  Footer,
} from "./components";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Bio />
      <Projects />
      <TechnicalWriting />
      <Skills />
      <Footer />
    </main>
  );
};

export default App;
