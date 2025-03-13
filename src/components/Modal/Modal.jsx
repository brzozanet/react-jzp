import { useContext } from "react";
import { ModalShownContext } from "../../context/ModalShownContext";
import "./Modal.css";

export function Modal() {
  const [, setIsModalShown] = useContext(ModalShownContext);

  const handleModalCloseClick = () => {
    console.log("click close");
    setIsModalShown(false);
  };

  return (
    <>
      <div className="modal">
        <span>Sukces! 🎉</span>
        <button onClick={() => handleModalCloseClick()}>Zamknij</button>
      </div>
    </>
  );
}
