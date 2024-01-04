import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Project from "./components/Projects/Project";
import { PROJECTS/* , COURSES, WORK_HISTORY */ } from "./constants";

function App() {
  return (
    <>
      <Header />

      <AboutMe />

      <Projects>
        {PROJECTS.map((project) => (
          <Project {...project} />
        ))}
      </Projects>

      <Footer />
    </>
  );
}

export default App;
