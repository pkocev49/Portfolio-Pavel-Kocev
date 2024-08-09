import "./App.css";

import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";

import Projects from "./Components/Projects";
import Experience from "./Components/Experience";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
