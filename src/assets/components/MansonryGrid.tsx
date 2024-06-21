//import catData from "../../../data.ts";
import useFetch from "../API/useFetch.ts";

const MansonryGrid = () => {
  const [isLoading, catData] = useFetch();
  console.log(catData);
  const imgElems = catData.map((img, i) => {
    return (
      <img
        className="mansonry-image"
        key={`mansonry-${img.id}-${i}`}
        src={img.url}
      />
    );
  });

  return (
    <div className="mansonry-wrapper">
      {isLoading ? <div className="loader" /> : imgElems}
    </div>
  );
};
export default MansonryGrid;
