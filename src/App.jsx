import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';
import NavigationBar from './components/NavigationBar.jsx';

function App() {
  return (
      <>
      <NavigationBar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Footer />
      </>
  );
}

export default App;
