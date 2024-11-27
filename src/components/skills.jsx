import { CardIconos } from "./cardIconos"
import { iconos } from "../icon.js"
import "../App.css"
export function Skill() {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="cardSkill">
                {iconos.map(e => <CardIconos imagen={e.img} nombre={e.nombre} key={e.nombre} />)}
            </div>

        </div>
    )
}