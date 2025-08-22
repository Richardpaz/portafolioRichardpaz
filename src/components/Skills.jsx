import { SiExpress } from "react-icons/si";
import "../styles/skills.css"
export function Skills() {
  return (
    <section className="contenedor-skills">
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}>🧠 Mis Skills</h2>

      <div className="skills-grid" style={{ display: "flex", flexDirection:"column", gap: "2rem" ,justifyContent:"center",alignContent:"center",textAlign:"left"}}>
        {/* Habilidades Técnicas */}
        <div>
          <h3 style={{ marginBottom: "0.5rem" }}>🔧 Técnicas</h3>
          <ul style={{ lineHeight: "1.8" }}>
            <li>✔ Análisis y diseño de sistemas</li>
            <li>✔ HTML, CSS, JavaScript, React</li>
            <li>✔ Node.js, Express, React Router DOM</li>
            <li>✔ MongoDB (Mongoose) y MySQL</li>
            <li>✔ APIs RESTful, CORS, Nodemon</li>
            <li>✔ Testing con Postman y herramientas básicas</li>
          </ul>
        </div>

        {/* Herramientas */}
        <div>
          <h3 style={{ marginBottom: "0.5rem" }}>🛠 Herramientas</h3>
          <ul style={{ lineHeight: "1.8" }}>
            <li>✔ Visual Studio Code</li>
            <li>✔ Git / GitHub</li>
            <li>✔ Postman, MySQL Workbench</li>
            <li>✔ MongoDB Compass</li>
            <li>✔ Trello, Notion, Jira</li>
          </ul>
        </div>

        {/* Habilidades Blandas */}
        <div>
          <h3 style={{ marginBottom: "0.5rem" }}>💬 Habilidades Blandas</h3>
          <ul style={{ lineHeight: "1.8" }}>
            <li>✔ Pensamiento lógico y analítico</li>
            <li>✔ Resolución de problemas</li>
            <li>✔ Comunicación efectiva</li>
            <li>✔ Trabajo en equipo</li>
            <li>✔ Capacidad de adaptación</li>
            <li>✔ Documentación clara</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

