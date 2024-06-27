import { catType } from "../helpers/types";
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

  let images;
  if (catData) {
    images = catData.map((img, i) => {
      return (
        <motion.img className="modal-img" key={`modal-${i}`} src={img.url} />
      );
    });
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
          <div
            onClick={(e) => e.stopPropagation()}
            ref={carouselRef}
            className="modal-wrapper"
          >
            {images}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
