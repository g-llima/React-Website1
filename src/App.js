import "./App.css";
import PageStart3 from "./components/PageStart3";
import Navbar3 from "./components/Navbar3";
import Skills from "./components/Skills";
import About from "./components/About";
import Section2 from "./components/Section2";
import Questions from "./components/Questions";
import Footer1 from "./components/Footer1";

function App() {
  return (
    <div className="App">
      <Navbar3 />
      <PageStart3 />
      <Skills />
      <Section2 />
      <About />
      <Questions />
      <Footer1 />
    </div>
  );
}

export default App;
