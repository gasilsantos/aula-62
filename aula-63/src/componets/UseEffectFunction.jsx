import React, {useEffect, useState} from "react"; 

export default function useEffectFunction(){
    const [clicks, setClicks] = useState(0)
    const [clicks2, setClicks2] = useState(0) 

    useEffect(
        document.title = 'Quantidade  de clicks (f): ${clicks}'
    )

    return (
        <div>
            <h3>UseEffect em componente de função</h3>
            <p>Quantidade de clicks: {clicks}</p>
            <button
                onClick={
                    ()=> setClicks(clicks + 1)
                }
            >
                clique aqui!
            </button>
        </div>
    )
}