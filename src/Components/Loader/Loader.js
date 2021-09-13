import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <main>
      <div class="preloader">
        <div class="preloader__square"></div>
        <div class="preloader__square"></div>
        <div class="preloader__square"></div>
        <div class="preloader__square"></div>
      </div>
      <div class="status">
        Loading<span class="status__dot">.</span>
        <span class="status__dot">.</span>
        <span class="status__dot">.</span>
      </div>
    </main>
  );
}

export default Loader;
