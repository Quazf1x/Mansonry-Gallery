import { modalType } from "../helpers/types";

const Modal = ({ selectedModal, setSelectedModal }: modalType) => {
  if (!selectedModal) return <></>;
  console.log(selectedModal.src);
  return (
    <div onClick={() => setSelectedModal(null)} className="modal-bg">
      <div className="modal-wrapper"></div>
    </div>
  );
};

export default Modal;
