import React, { useEffect } from "react"

export default function Menu() {
    useEffect(() => {
        const elemento = document.querySelectorAll(`a[href='${window.location.pathname}']`)[0]
        elemento.classList.add("selecionado")
    }, [])

    return (
        <div id="menu">
            <div id="titulo">
                <a>PIBID</a>
                <a className='subtitulo'>LCE Palotina</a>
            </div>
            <div id="lista">
                <a href="/">Início</a>
                <a href="/projetos">Projetos</a>
                <a href="/galeria">Galeria</a>
                <a href="/publicacoes">Publicações</a>
                <a href="/membros">Membros</a>
                <a href="/formulario" className="botao">Solicitar peça</a>
            </div>
        </div>
    )
}