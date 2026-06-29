import HeroCard from "./components/HeroCard";
import Nav from "./pages/Nav";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import LetsConnect from "./pages/LetsConnect";
import Experience from "./pages/Experience";

function App() {
  return (
    <div className=" w-full " id="Home">
      <Nav/>
      <HeroCard />
      <Skills/>
      <Projects/>
      <Experience/>
      <LetsConnect/>
    </div>
  );
}

export default App;
