import "./Modal.css";
import { useContext } from "react";
import { ModalShownContext } from "../../context/ModalShownContext";

export function Modal() {
  const [, setIsModalShown] = useContext(ModalShownContext);

  const handleButtonModalCloseClick = () => {
    console.log("click close");
    setIsModalShown(false);
  };

  return (
    <div className="modal">
      <span>Sukces! 🎉</span>
      <button onClick={() => handleButtonModalCloseClick()}>Zamknij</button>
    </div>
  );
}
