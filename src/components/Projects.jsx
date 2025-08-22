import imagen from "../assets/Pelis/imagen1.jpg";
import pexels from "../assets/pexels/img1.png";
import todo from "../assets/todo/todoApp.png";
import "../styles/Projects.css";
export function Projects() {
  return (
    <div className="section-projects">
      <h1
        style={{ fontSize: "2rem", marginBottom: "1rem", textAlign: "center" }}
      >
        {" "}
        🗂️Proyectos
      </h1>
      <section>
        <h1>App de Peliculas TMDB</h1>
        <div className="projects-body">
          <p>
            Desarrollada con React que permite a los usuarios explorar
            información de películas, ver detalles, buscar por título, explorar
            por categorías y ver trailers. La aplicación se conecta a una API
            externa (como TMDB) para obtener los datos de forma dinámica.
          <a href="https://pelis-wheat.vercel.app/"></a>
          </p>
          <img src={imagen} alt="" />
        </div>
      </section>
      <section>
        <h1>App de Pexels</h1>
        <div className="projects-body">
          <p>
            📸 Este proyecto utiliza la API de Pexels para mostrar imágenes. La
            integración se realiza mediante peticiones a la API REST, usando
            herramientas como Axios y React, permitiendo búsquedas dinámicas.
          </p>
          <img src={pexels} alt="" />
        </div>
      </section>
      <section>
        <h1>App de Todo app</h1>
        <div className="projects-body">
          <p>
            Este proyecto utiliza un CRUD de tareas. Un CRUD de tareas con Redux
            es una aplicación que permite Crear, Leer, Actualizar y Eliminar
            tareas, utilizando Redux para manejar el estado global de la
            aplicación.
          </p>
          <img src={todo} alt="" />
        </div>
      </section>
    </div>
  );
}
