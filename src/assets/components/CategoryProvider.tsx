import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import data from "../API/catBreedsData";

type providerType = {
  children: ReactNode;
};

type cartContextType = {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
};

const categoryContext = createContext<cartContextType>({
  category: "e",
  setCategory: () => {},
});

const CategoryProvider = ({ children }: providerType) => {
  const [category, setCategory] = useState(data[0].id);
  return (
    <categoryContext.Provider value={{ category, setCategory }}>
      {children}
    </categoryContext.Provider>
  );
};

export { categoryContext };
export default CategoryProvider;
