import "./App.css";
import Hero from "./components/Hero";
import Navbar3 from "./components/Navbar3";
import Skills from "./components/Skills";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Questions from "./components/Questions";
import Footer1 from "./components/Footer1";

function App() {
  return (
    <div className="App">
      <Navbar3 />
      <Hero />
      <Skills />
      <Benefits />
      <About />
      <Questions />
      <Footer1 />
    </div>
  );
}

export default App;
