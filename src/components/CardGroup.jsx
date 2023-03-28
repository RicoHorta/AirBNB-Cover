import React from 'react'
// CSS
import './css/CardGroup.css'
import { useState } from 'react';


export default function CardGroup({ options }) {
    // Manipula o estado do ID clicado. Estado nasce -1 (desabilitado não clicado)
    const [clickedId, setClickedId] = useState(-1);
    // função captura e(elemento) e i(índice) do evento click 
    const handleClick = (e, i) => {
        setClickedId(i); //set o valor do indice altera o estado
    }
    return (
        <div className='row mt-4'>
            {
                options.map((item, i) => (
                    <div key={i} className='col'>
                        <div
                            onClick={(e) => handleClick(e, i)}
                            className={i === clickedId ? "w-100 cardGroup active" : "w-100 cardGroup"}>
                            <i className={item.icon} />
                            <p className='text-truncate'>{item.text}</p>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}
