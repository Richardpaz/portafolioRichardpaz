import { About } from "./components/About.jsx";
import { Header } from "./components/Header.jsx";
import "../src/styles/App.css"
import { Skills } from "./components/Skills.jsx";
import { Projects } from "./components/Projects.jsx";

export function App() {
  return (
    <div className="Contenedor">
      <Header/>
      <About />
      <Skills/>
      <Projects/>
    </div>
  );
}
