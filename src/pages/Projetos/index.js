import React from "react"

import projetos from "../../lib/projetos"
import Projeto from "../../components/projeto"

function Projetos() {

    return (
        <div id="projeto">
            <h1>Projetos desenvolvidos</h1>
            <h3>2020 ~ 2021</h3>
            <div className="linha" />
            <div id="lista">
                {
                    projetos.map((projeto, i) => (
                        <Projeto key={i} titulo={projeto.titulo} texto={projeto.descricao} imagem={projeto.imagem} />
                    ))
                }
            </div>
        </div>
    )
}

export default Projetos