import Navbar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
        <ScrollToTopButton />
      </main>
    </>
  );
}

export default App;
