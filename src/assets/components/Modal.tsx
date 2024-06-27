import { catType } from "../helpers/types";
import { modalVariants } from "../helpers/motionConstants";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import "jquery";
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type modalType = {
  catData: catType[];
  selectedModal?: number | null;
  setSelectedModal: React.Dispatch<React.SetStateAction<number | null>>;
};

const Modal = ({ catData, selectedModal, setSelectedModal }: modalType) => {
  const carouselRef = useRef(null);

  let images,
    breedData = {
      name: "",
      origin: "",
      weight: "",
      lifeSpan: "",
      temperament: "",
      wiki: "",
      desc: "",
    };

  if (catData) {
    images = catData.map((img, i) => {
      return <img className="carousel-img" key={`modal-${i}`} src={img.url} />;
    });
    if (typeof selectedModal == "number") {
      breedData = {
        name: catData[selectedModal].breeds[0].name,
        origin: catData[selectedModal].breeds[0].origin,
        weight: catData[selectedModal].breeds[0].weight.metric,
        lifeSpan: catData[selectedModal].breeds[0].life_span,
        temperament: catData[selectedModal].breeds[0].temperament,
        wiki: catData[selectedModal].breeds[0].wikipedia_url,
        desc: catData[selectedModal].breeds[0].description,
      };
    }
  }

  useEffect(() => {
    if (carouselRef.current) {
      $(carouselRef.current).slick();
      $(carouselRef.current).slick("slickGoTo", selectedModal, true);
    }
  }, [selectedModal]);

  return (
    <>
      {typeof selectedModal == "number" ? (
        <div onClick={() => setSelectedModal(null)} className="modal-bg">
          <motion.div
            variants={modalVariants}
            initial="initial"
            animate="animate"
            onClick={(e) => e.stopPropagation()}
            className="modal-wrapper"
          >
            <div className="modal-right-wrapper">
              <h2>{breedData.name}</h2>
              <p>
                <strong>Origin: </strong>
                {breedData.origin}
              </p>
              <p>
                <strong>Life Span: </strong>
                {breedData.lifeSpan} years
              </p>
              <p>
                <strong>Weight: </strong>
                {breedData.weight} kg
              </p>
              <p>
                <strong>Temperament: </strong>
                {breedData.temperament}
              </p>
              <p>
                <strong>Wiki: </strong>
                <a target="_blank" href={breedData.wiki}>
                  {breedData.wiki}
                </a>
              </p>
              <p className="modal-description">
                <strong>Description: </strong>
                {breedData.desc}
              </p>
            </div>
            <div ref={carouselRef} className="carousel-wrapper">
              {images}
            </div>
          </motion.div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
