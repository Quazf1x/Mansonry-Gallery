import Header from "./assets/components/Header.tsx";
import MansonryGrid from "./assets/components/MansonryGrid.tsx";
import Modal from "./assets/components/Modal.tsx";
import { useState, useMemo } from "react";
import useFetch from "./assets/API/useFetch.ts";
import { catType } from "./assets/helpers/types.ts";
import data from "./assets/API/catBreedsData.ts";

const App = () => {
  const [selectedModal, setSelectedModal] = useState<number | null>(null);
  const [category, setCategory] = useState(data[0].children[0].id);

  const params = useMemo(() => {
    return {
      breed_ids: category,
      limit: 50,
    };
  }, [category]);

  const [isLoading, catData] = useFetch<catType[]>("images/search", params);

  return (
    <>
      <Modal
        catData={catData}
        selectedModal={selectedModal}
        setSelectedModal={setSelectedModal}
      />
      <Header setCategory={setCategory} />
      <main className={selectedModal ? "hidden-overflow-y" : ""}>
        <MansonryGrid
          category={category}
          isLoading={isLoading}
          catData={catData}
          setSelectedModal={setSelectedModal}
        />
      </main>
    </>
  );
};

export default App;
