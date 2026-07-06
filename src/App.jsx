import { Suspense, lazy } from "react";
import PageLoader from "./pages/PageLoader";
import ScrollProgress from "./components/ScrollProgress";


const HeroCard   = lazy(() => import("./components/HeroCard"));
const Skills     = lazy(() => import("./pages/Skills"));
const Projects   = lazy(() => import("./pages/Projects"));
const Experience = lazy(() => import("./pages/Experience"));
const LetsConnect= lazy(() => import("./pages/LetsConnect"));
const Nav        = lazy(() => import("./pages/Nav"));
function App() {
  // const [showSplash, setSplash] = useState(true)

  // if (showSplash) return <SplashScreen onFinish={() => setSplash(false)} />

  return (
    <div className="w-full overflow-x-hidden" id="Home">
      <Suspense fallback={<PageLoader/>}>
      <ScrollProgress />
      <Nav />
      <HeroCard />
      <Skills/>
      <Projects/>
      <Experience/>
      <LetsConnect/>
      </Suspense>
    </div>
  );
}

export default App;