import HeroCard from "./components/HeroCard";
import Nav from "./pages/Nav";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import LetsConnect from "./pages/LetsConnect";

function App() {
  return (
    <div className=" w-full " id="Home">
      <Nav/>
      <HeroCard />
      <Skills/>
      <Projects />
      <LetsConnect/>
    </div>
  );
}

export default App;
