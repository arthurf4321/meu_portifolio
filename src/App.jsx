import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './index.css';

function App() {
  return (
    <div className="bg-dark-blue min-h-screen text-white font-sans">
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
