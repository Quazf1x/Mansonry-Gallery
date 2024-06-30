import { catType } from "../helpers/types.ts";

type masonryGridTypes = {
  catData: catType[];
  setSelectedModal: React.Dispatch<React.SetStateAction<number | null>>;
};

const MansonryGrid = ({ catData, setSelectedModal }: masonryGridTypes) => {
  const handleImgClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const imgIndex = Number((e.target as HTMLElement).dataset.index);
    setSelectedModal(imgIndex);
  };

  const imgElems = catData.map((img, i) => {
    return (
      <a key={`mansonry-${img.id}-${i}`} onClick={handleImgClick}>
        <img data-index={i} className="mansonry-image" src={img.url} />
      </a>
    );
  });

  return <div className="mansonry-wrapper">{imgElems}</div>;
};

export default MansonryGrid;
