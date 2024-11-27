import "../App.css"
export function Project() {
    return (
        <div className="conteinerProject">
            <h1>Projects</h1>
            <div className="cardProject">
                <div className="cardTextProject">
                    <h3>Rick and Morty</h3>
                    <span>React js - bootstrap</span>
                    <a href="https://richardpaz.github.io/RickandMortyReact/" target="_blank">https://richardpaz.github.io/RickandMortyReact/</a>
                </div>
                <img src="./src/assets/rickandmorty.png" alt="" />
            </div>
            <div></div>
        </div>
    )
}