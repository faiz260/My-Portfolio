import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ReactParticles from "react-particles-js";
import particlesConfig from "./particles-config";

function App() {
  return (
    <div className="App">
      <Particles>
        <Navbar />
        <Home />
      </Particles>
      <About />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

function Particles({ children }) {
  return (
    <div style={{ position: "relative" }}>
      <ReactParticles
        params={particlesConfig}
        style={{
          position: "absolute",
          zIndex: 1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        }}
      />
      {children && <div style={{ position: "relative" }}>{children}</div>}
    </div>
  );
}

export default App;
