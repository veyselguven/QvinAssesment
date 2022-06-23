import React from "react";
import NavBar from "./NavBar";
import About from "./About";
import Values from "./Values";
import Team from "./Team";
import Home from "./Home";
import Job from "./Job";

const Main = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Values />
      <Team />
      <Job />
    </div>
  );
};

export default Main;
