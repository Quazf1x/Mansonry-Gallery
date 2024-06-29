import { motion, AnimatePresence } from "framer-motion";
import { catType } from "../helpers/types.ts";
import { mansonryGridVariants } from "../helpers/motionConstants.ts";

type masonryGridTypes = {
  category: string;
  isLoading: boolean;
  catData: catType[];
  setSelectedModal: React.Dispatch<React.SetStateAction<number | null>>;
};

const MansonryGrid = ({
  category,
  isLoading,
  catData,
  setSelectedModal,
}: masonryGridTypes) => {
  const handleImgClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const imgIndex = Number((e.target as HTMLElement).dataset.index);
    setSelectedModal(imgIndex);
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
