//import catData from "../../../data.ts";
import catType from "../API/fetchTypes.ts";
import useFetch from "../API/useFetch.ts";
import { categoryContext } from "./CategoryProvider.tsx";
import { useMemo, useContext } from "react";

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
    <>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="mansonry-wrapper">{imgElems}</div>
      )}
    </>
  );
};
export default MansonryGrid;
