import Header from "./assets/components/Header";
import CategoryProvider from "./assets/components/CategoryProvider";
import MansonryGrid from "./assets/components/MansonryGrid";
import Modal from "./assets/components/Modal";
import { useState } from "react";

const App = () => {
  const [selectedModal, setSelectedModal] = useState(null);

  return (
    <CategoryProvider>
      <Modal
        selectedModal={selectedModal}
        setSelectedModal={setSelectedModal}
      />
      <Header />
      <main>
        <MansonryGrid setModal={setSelectedModal} />
      </main>
    </CategoryProvider>
  );
};

export default App;
