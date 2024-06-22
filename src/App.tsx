import Header from "./assets/components/Header";
import CategoryProvider from "./assets/components/CategoryProvider";
import MansonryGrid from "./assets/components/MansonryGrid";

const App = () => {
  return (
    <CategoryProvider>
      <Header />
      <main>
        <MansonryGrid />
      </main>
    </CategoryProvider>
  );
};

export default App;
