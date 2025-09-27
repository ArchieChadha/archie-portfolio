import React from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import LatestUpdate from "./components/LatestUpdate";
import Certifications from "./components/Certifications";
import Credits from "./components/Credits";
import NavBar from "./components/NavBar";
import "./App.css";
import "./styles/Global.css";
import "rsuite/dist/styles/rsuite-default.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Certifications></Certifications>
        <LatestUpdate></LatestUpdate>
        <Credits></Credits>
      </div>
    </div>
  );
}

export default App;
