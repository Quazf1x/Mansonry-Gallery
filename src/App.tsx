import Header from "./assets/components/Header.tsx";
import MansonryGrid from "./assets/components/MansonryGrid.tsx";
import Modal from "./assets/components/Modal.tsx";
import ErrorElement from "./assets/components/helperElements/ErrorElement.tsx";
import LoaderElement from "./assets/components/helperElements/LoaderElement.tsx";

import useFetch from "./assets/API/useFetch.ts";
import { catType } from "./assets/helpers/types.ts";
import data from "./assets/API/catBreedsData.ts";
import { mansonryGridVariants } from "./assets/helpers/motionConstants.ts";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";

const App = () => {
  const [selectedModal, setSelectedModal] = useState<number | null>(null);
  const [category, setCategory] = useState(data[0].children[0].id);

  const params = useMemo(() => {
    return {
      breed_ids: category,
      limit: 20,
    };
  }, [category]);

  const [isLoading, catData, isError] = useFetch<catType[]>(
    "images/search",
    params
  );

  return (
    <>
      <Modal
        catData={catData}
        selectedModal={selectedModal}
        setSelectedModal={setSelectedModal}
      />
      <Header setCategory={setCategory} />
      <main>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoaderElement />
          ) : isError ? (
            <ErrorElement />
          ) : (
            <motion.div
              key={category}
              variants={mansonryGridVariants}
              initial="initial"
              exit="exit"
              animate="animate"
            >
              <MansonryGrid
                catData={catData}
                setSelectedModal={setSelectedModal}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
};

export default App;
