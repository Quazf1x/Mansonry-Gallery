//import catData from "../../../data.ts";
import catType from "../API/fetchTypes.ts";
import useFetch from "../API/useFetch.ts";

const MansonryGrid = () => {
  const [isLoading, catData] = useFetch<catType[]>("images/search", {
    breed_ids: "beng",
    limit: 50,
  });
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
