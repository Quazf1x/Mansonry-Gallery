type modalType = {
  selectedModal?: HTMLImageElement | null;
  setSelectedModal: React.Dispatch<
    React.SetStateAction<HTMLImageElement | null>
  >;
};

type catType = {
  breeds: object[] | null;
  height: number;
  id: string;
  url: string;
  width: number;
};

export type { modalType, catType };
