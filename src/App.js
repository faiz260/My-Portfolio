import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Service />
    </div>
  );
}

export default App;
