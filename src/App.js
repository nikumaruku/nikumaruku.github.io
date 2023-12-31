import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education";
import Socials from "./components/Socials";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Work />
      <Socials/>
    </div>
  );
}

export default App;
