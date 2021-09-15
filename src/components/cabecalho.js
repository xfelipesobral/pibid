import React, { useState, useEffect } from "react"

function Cabecalho() {
    const [inicio, setInicio] = useState(false)

    useEffect(() => {
        setInicio(window.location.pathname === '/')
    }, [])

    return (
        <div id="cabecalho" style={{ height: `${inicio ? 50 : 25}vh` }}>
            <div id="conteudo" style={{ flexDirection: inicio ? "column" : "row", padding: "0 20px" }}>
                <img src="assets/logo.svg" style={{ height: `${inicio ? 20 : 15}vh` }} />
                <div style={{ marginTop: inicio ? 25 : 0, marginLeft: inicio ? 0 : 25 }}>
                    <h1>UFPR Palotina</h1>
                    <h2>Licenciatura em Ciências Exatas</h2>
                </div>
            </div>
        </div>
    )
}

export default Cabecalho