import React, {useState} from "react";

export default function UseStateFunction(){

    const [clicks, setClicks] = useState(0)

    return(
        <div>
            <h3>UseState em componente de função</h3>
            <p>Quantidade de clicks: {clicks}</p>
            <button
                onClick={
                    () => setClicks(clicks + 1)
                }
            >
                clique aqui!
            </button>
        </div>
    )
}