import Header from "./assets/components/Header";
import CategoryProvider from "./assets/components/CategoryProvider";
import MansonryGrid from "./assets/components/MansonryGrid";
import Modal from "./assets/components/Modal";
import { useState } from "react";

const App = () => {
  const [selectedModal, setSelectedModal] = useState<null | HTMLImageElement>(
    null
  );

  return (
    <CategoryProvider>
      <Modal
        selectedModal={selectedModal}
        setSelectedModal={setSelectedModal}
      />
      <Header />
      <main className={selectedModal ? "hidden-overflow-y" : ""}>
        <MansonryGrid setSelectedModal={setSelectedModal} />
      </main>
    </CategoryProvider>
  );
};

export default App;
