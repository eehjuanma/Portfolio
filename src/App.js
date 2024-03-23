import './App.css';
import Main from "./components/Main/Main";
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Ecommerce from './components/Ecommerce/Ecommerce';

function App() {
  return (
    <div>
      <div>
      <Nav/>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <div>
        <Ecommerce/>
      </div>
      </div>
    </div>
  );
}

export default App;
