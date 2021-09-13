import React, { Suspense, lazy } from "react";
import "./App.css";
import ReactParticles from "react-particles-js";
import particlesConfig from "./particles-config";
import Loader from "./Components/Loader/Loader";
const Home = lazy(() => import("./Components/Home/Home"));
const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const Service = lazy(() => import("./Components/Service/Service"));
const About = lazy(() => import("./Components/About/About"));
const Portfolio = lazy(() => import("./Components/Portfolio/Portfolio"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const Footer = lazy(() => import("./Components/Footer/Footer"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Particles>
          <Navbar />
          <Home />
        </Particles>
        <About />
        <Service />
        <Portfolio />
        <Contact />
        <Footer />
      </Suspense>
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
