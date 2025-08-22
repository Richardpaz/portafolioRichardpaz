import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../styles/header.css";
export function Header() {
  return (
    <div className="header-container">
      <h1>Richard Paz</h1>
      <div className="header-links">
        <a href="">
          <FaLinkedin />
        </a>
        <a href="">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
