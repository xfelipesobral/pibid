import React, { useState } from "react"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"

import galeria from "../../lib/galeria"

function Galeria() {
    const [currentImage, setCurrentImage] = useState(0)
    const [viewerIsOpen, setViewerIsOpen] = useState(false)

    const openLightbox = (index) => {
        setCurrentImage(index)
        setViewerIsOpen(true)
    }

    const closeLightbox = () => {
        setCurrentImage(0)
        setViewerIsOpen(false)
    }

    const imageRenderer = ({ index, left, top, key, photo }) => {
        const cont = {
            backgroundColor: "#eee",
            cursor: "pointer",
            overflow: "hidden",
            position: "relative",
            margin: "2px"
        }

        const abrirPopup = () => {
            openLightbox(index)
        }

        return (
            <div key={key} style={{ height: photo.height, width: photo.width, ...cont }} onClick={abrirPopup}>
                <img alt={photo.title} {...photo} />
                <div style={{ position: "absolute", bottom: 0, background: "rgba(0, 0, 0, 0.75)", color: "#fff", width: "100%", padding: "10px 0" }}>
                    <p>{photo.describe}</p>
                </div>
            </div>
        )
    }

    return (
        <div id="galeria">
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel currentIndex={currentImage} views={galeria.map(x => ({ "source": x.src, "caption": x.describe }))} />
                    </Modal>
                ) : null}
            </ModalGateway>

            <h1>Galeria do projeto</h1>
            <h3>2020 ~ 2021</h3>
            <div className="linha" />
            <Gallery photos={galeria} renderImage={imageRenderer} />
        </div>
    )
}

export default Galeria