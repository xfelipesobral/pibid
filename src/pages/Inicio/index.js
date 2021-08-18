
import React, { useState } from "react"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import Lottie from "react-lottie"
import imagens from "./imagens"

import background from "../../animations/48941-background-floting.json" // 46147-background2.json

function Inicio() {
    const [currentImage, setCurrentImage] = useState(0)
    const [viewerIsOpen, setViewerIsOpen] = useState(false)

    const openLightbox = (event, { photo, index }) => {
        setCurrentImage(index)
        setViewerIsOpen(true)
    }

    const closeLightbox = () => {
        setCurrentImage(0)
        setViewerIsOpen(false)
    }

    return (
        <div>
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel currentIndex={currentImage} views={imagens.map(x => ({ "source": x.src, "caption": "pibd" }))} />
                    </Modal>
                ) : null}
            </ModalGateway>
            
            <div id="cabecalho" >
                <Lottie
                    options={{
                        loop: true,
                        autoplay: true,
                        animationData: background,
                        rendererSettings: {
                            preserveAspectRatio: "xMidYMid meet"
                        }
                    }}
                    height="100%"
                />
                <div className="conteudo">
                    <img src="assets/logo.svg" />
                </div>
            </div>

            <div id="apresentacao">
                <h1>PIBID</h1>
                <h3>UFPR PALOTINA</h3>

                <div className="linha" />

                <p className="descricao">O Programa Institucional de Bolsas de Iniciação à Docência (PIBID) foi criado para trazer aos licenciandos a possibilidade de ter acesso à prática docente, valorizando o magistério, concedendo a possibilidade de experimentação e vivência.</p>
                <p className="subdescricao">Temos como objetivo proporcionar uma formação inicial de qualidade para futuros professores.</p>
                <p className="subsubdescricao">Oportunidade de descobrimento do ser professor</p>
            </div>

            <div id="sociais">
                <h1 style={{ marginBottom: 30 }}>Redes sociais do projeto</h1>
                <a href="mara.parisoto@ufpr.br" className="link">mara.parisoto@ufpr.br</a>
            </div>

            <div id="galeria">
                <Gallery photos={imagens} onClick={openLightbox} />
            </div>
        </div>
    )
}

export default Inicio