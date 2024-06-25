//import catData from "../../../data.ts";
import catType from "../API/fetchTypes.ts";
import useFetch from "../API/useFetch.ts";
import { categoryContext } from "./CategoryProvider.tsx";
import { useMemo, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mansonryGridVariants } from "../helpers/motionConstants.ts";

const MansonryGrid = () => {
  const { category } = useContext(categoryContext);

  const params = useMemo(() => {
    return {
      breed_ids: category,
      limit: 50,
    };
  }, [category]);

  const [isLoading, catData] = useFetch<catType[]>("images/search", params);
  let imgElems;
  if (!isLoading) {
    imgElems = catData.map((img, i) => {
      return (
        <img
          className="mansonry-image"
          key={`mansonry-${img.id}-${i}`}
          src={img.url}
        />
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
