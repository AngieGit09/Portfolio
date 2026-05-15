import { useState } from "react";

import "../styles/carousel.css";

function Carousel() {
  const images = [
    {
      src: "/images_projet/home.png",
      alt: "Visuel de la page d'accueil du site Rénomeuble",
    },
    {
      src: "/images_projet/cat.png",
      alt: "Visuel de la page catégorie du site Rénomeuble",
    },
    {
      src: "/images_projet/produit.png",
      alt: "Visuel de la page informations du site Rénomeuble",
    },
    {
      src: "/images_projet/info.png",
      alt: "Visuel de la page informations du site Rénomeuble",
    },
    {
      src: "/images_projet/connexion.png",
      alt: "Visuel de la page connexion administrateur du site Rénomeuble",
    },
    {
      src: "/images_projet/dashboard.png",
      alt: "Visuel de la page dashboard du site Rénomeuble",
    },
    {
      src: "/images_projet/message.png",
      alt: "Visuel de la page message du site Rénomeuble",
    },
    {
      src: "/images_projet/gestion_cat.png",
      alt: "Visuel de la page gestion des catégories du site Rénomeuble",
    },
    {
      src: "/images_projet/gestion_produits.png",
      alt: "Visuel de la page gestion des produits du site Rénomeuble",
    },
    {
      src: "/images_projet/modifier.png",
      alt: "Visuel de la modale modifier un produit du site Rénomeuble",
    },
  ];
  const [currentImage, setCurrentImage] = useState(0);

  function nextImage() {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  }

  function previousImage() {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  }

  return (
    <>
      <section className="carousel">
        <h2>Galerie</h2>
        <div className="carousel-container">
          <button onClick={previousImage}>←</button>

          <img
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            className="carousel-image"
          />

          <button onClick={nextImage}>→</button>
        </div>
      </section>
      <div className="line"></div>
    </>
  );
}

export default Carousel;
