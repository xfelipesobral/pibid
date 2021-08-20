
import React, { useState } from "react"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Parallax, Pagination, Navigation } from "swiper/core"
import Lottie from "react-lottie"

import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"

import galeria from "../../lib/galeria"
import projetos from '../../lib/projetos'
import Projeto from "../../components/projeto"
import background from "../../animations/48941-background-floting.json"

SwiperCore.use([Parallax, Pagination, Navigation])

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
                        <Carousel currentIndex={currentImage} views={galeria.map(x => ({ "source": x.src, "caption": "pibd" }))} />
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
                <h1 style={{ marginBottom: 30 }}>Integrantes</h1>
                <a href="mara.parisoto@ufpr.br" className="link">mara.parisoto@ufpr.br</a>
            </div>

            <div id="projeto">
                <h1>Projetos desenvolvidos</h1>
                <div className="linha" />
                <div id="lista">
                    {
                        projetos.map((projeto, i) => (
                            <Projeto key={i} titulo={projeto.titulo} texto={projeto.descricao} imagem={projeto.imagem} />
                        ))
                    }
                </div>
            </div>

            <div id="galeria">
                <h1>Galeria do projeto</h1>
                <div className="linha" />
                <Gallery photos={galeria} onClick={openLightbox} />
            </div>

            <div id="rodape">
                <p><span style={{ fontWeight: "bold" }}>PIBID</span> - Universidade Federal do Paraná - Setor Palotina © 2021</p>
            </div>
        </div>
    )
}

export default Inicio