import "../App.css"
export function CardIconos({nombre,imagen}) {
    return(
        <div className="cardIcono">
            <span>{nombre}</span>
            <img src={imagen} alt="" />
        </div>
    )
}