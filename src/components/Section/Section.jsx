import { useContext } from "react";
import { ModalShownContext } from "../../context/ModalShownContext";
import "./Section.css";

export function Section() {
  const [, setIsModalShown] = useContext(ModalShownContext);

  const handleModalOpenClick = () => {
    console.log("click open");
    setIsModalShown(true);
  };

  return (
    <section>
      <h2>Nie czekaj!</h2>
      <h3>Otwórz modal!</h3>
      <button onClick={() => handleModalOpenClick()}>Otwórz</button>
    </section>
  );
}
