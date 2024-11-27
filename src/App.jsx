import "./App.css"
import { Contact } from "./components/conctact.jsx"
import { Header } from "./components/header.jsx"
import { Project } from "./components/projects.jsx"
import { Skill } from "./components/skills.jsx"
export function App() {
  return (
    <div className="conteiner">
      <Header />
      <div className="about">
        <img src="./src/assets/avatar.png" alt="" />
        <div className="about-text">
          <h1>Richard Paz</h1>
          <p>Desarrollador web/Analista de sistemas</p>
          <p>Tecnico informatico/Tecnico electronico</p>
          <Contact />
        </div>
      </div>
      <Project/>
      <Skill />
      <Contact />
    </div>

  )
}