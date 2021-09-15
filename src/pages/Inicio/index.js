import React from "react"

function Inicio() {
    return (
        <div>
            <div id="apresentacao">
                <h1>PIBID - UFPR Palotina</h1>
                <h3>Licenciatura em Ciências Exatas</h3>

                <div className="linha" />

                <p className="descricao">O Programa Institucional de Bolsas de Iniciação à Docência (PIBID) foi criado para trazer aos licenciandos a possibilidade de ter acesso à prática docente, valorizando o magistério, concedendo a possibilidade de experimentação e vivência.</p>
                <p className="subdescricao">Temos como objetivo proporcionar uma formação inicial de qualidade para futuros professores.</p>
                <p className="subsubdescricao">Oportunidade de descobrimento do ser professor</p>
            </div>

            <div id="sociais">
                <h1 style={{ marginBottom: 30 }}>Organização</h1>
                <h2>Pegar organização atual do pibid com fotos e nomes...</h2>
            </div>
        </div>
    )
}

export default Inicio