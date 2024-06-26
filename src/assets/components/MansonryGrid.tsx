//import catData from "../../../data.ts";
import { catType } from "../helpers/types.ts";
import { motion, AnimatePresence } from "framer-motion";
import { mansonryGridVariants } from "../helpers/motionConstants.ts";

type masonryGridTypes = {
  category: string;
  isLoading: boolean;
  catData: catType[];
  setSelectedModal: React.Dispatch<
    React.SetStateAction<HTMLImageElement | null>
  >;
};

const MansonryGrid = ({
  category,
  isLoading,
  catData,
  setSelectedModal,
}: masonryGridTypes) => {
  const handleImgClick = (e) => {
    setSelectedModal(e.target.dataset.index);
  };

  let imgElems;
  if (!isLoading) {
    imgElems = catData.map((img, i) => {
      return (
        <a key={`mansonry-${img.id}-${i}`} onClick={handleImgClick}>
          <img data-index={i} className="mansonry-image" src={img.url} />
        </a>
      );
    });
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <motion.div
          key={category}
          variants={mansonryGridVariants}
          initial="initial"
          exit="exit"
          animate="animate"
          className="mansonry-wrapper"
        >
          {imgElems}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MansonryGrid;
