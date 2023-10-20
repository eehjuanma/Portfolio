import './App.css';
import Main from "./components/Main/Main";
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div>
      <Nav/>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
