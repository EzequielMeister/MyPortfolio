import { useState } from "react";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Loader from "./components/Loader";

function App() {
  const [language, setLanguage] = useState("es"); // "es" por defecto

  return (
    <>
      <Loader />
      <Navbar language={language} setLanguage={setLanguage} />
      <Header language={language} />
      <main>
        <About language={language} />
        <Projects language={language} />
        <Skills language={language} />
        <Contact language={language} />
        <ScrollToTopButton />
      </main>
    </>
  );
}

export default App;
