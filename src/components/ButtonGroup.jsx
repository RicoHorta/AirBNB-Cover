import React from 'react'
// CSS
import './css/ButtonGroup.css'
import { useState } from 'react';

export default function ButtonGroup({ buttons }) {
    // Manipula o estado do ID clicado. Estado nasce -1 (desabilitado não clicado)
    const [clickedId, setClickedId] = useState(-1);
    // função captura e(elemento) e i(índice) do evento click 
    const handleClick = (e, i) => {
        setClickedId(i); //set o valor do indice altera o estado
    }
    return (
        <div className='row mb-5'>
            {
                buttons.map((buttonLabel, i) => (
                    <div key={i} className={i == 0 ? 'col-3' : 'col'}>
                        <button
                            key={i}
                            onClick={(e) => handleClick(e, i)}
                            className={i === clickedId || clickedId == -1 && buttonLabel == "Qualquer um" ? 'w-100 btn-detalhesqtd active' : 'w-100 btn-detalhesqtd'}
                        >
                            {buttonLabel}
                        </button>
                    </div>
                ))
            }
        </div>
    )
}
