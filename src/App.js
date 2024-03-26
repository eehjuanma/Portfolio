import './App.css';
import Main from "./components/Main/Main";
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";

function App() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 1000, delay: 20 });
  return (
    <div>
      <div ref={scrollRef}>
        <Nav/>
        <Main/>
        <About />
        <Skills/>
        <Projects/>
        <Contact />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
