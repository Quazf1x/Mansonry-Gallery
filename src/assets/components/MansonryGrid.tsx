//import catData from "../../../data.ts";
import { catType, modalType } from "../helpers/types.ts";
import useFetch from "../API/useFetch.ts";
import { categoryContext } from "./CategoryProvider.tsx";
import { useMemo, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mansonryGridVariants } from "../helpers/motionConstants.ts";

const MansonryGrid = ({ setSelectedModal }: modalType) => {
  const { category } = useContext(categoryContext);

  const params = useMemo(() => {
    return {
      breed_ids: category,
      limit: 50,
    };
  }, [category]);

  const [isLoading, catData] = useFetch<catType[]>("images/search", params);

  const handleImgClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLImageElement;
    setSelectedModal(target);
  };

  let imgElems;
  if (!isLoading) {
    imgElems = catData.map((img, i) => {
      return (
        <a key={`mansonry-${img.id}-${i}`} onClick={handleImgClick}>
          <img className="mansonry-image" src={img.url} />
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
