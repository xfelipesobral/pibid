import React from 'react'

function Projeto({ imagem, titulo, texto }) {

    return (
        <div className="item">
            <div>
                <img src={imagem} />
            </div>
            <div className="descricao">
                <h2>{titulo}</h2>
                <p>{texto}</p>
            </div>
        </div>
    )
}

export default Projeto