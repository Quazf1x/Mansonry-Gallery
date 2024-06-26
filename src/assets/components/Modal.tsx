import { catType } from "../helpers/types";
import { useEffect, useRef } from "react";
import "jquery";
import $ from "jquery";
import "slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type modalType = {
  catData: catType[];
  selectedModal?: any;
  setSelectedModal: any;
};

const Modal = ({ catData, selectedModal, setSelectedModal }: modalType) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    console.log(selectedModal);
    if (carouselRef.current) $(carouselRef.current).slick({});
  }, [selectedModal]);

  let images;
  if (catData) {
    images = catData.map((img, i) => {
      return <img className="modal-img" key={`modal-${i}`} src={img.url} />;
    });
  }

  return (
    <>
      {selectedModal ? (
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
