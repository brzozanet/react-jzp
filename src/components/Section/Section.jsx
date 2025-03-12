import "./Section.css";
import { useContext } from "react";
import { ModalShownContext } from "../../context/ModalShownContext";

export function Section() {
  const [, setIsModalShown] = useContext(ModalShownContext);

  const handleButtonModalOpenClick = () => {
    console.log("click open");
    setIsModalShown(true);
  };

  return (
    <section>
      <h2>Nie czekaj!</h2>
      <h3>Otwórz modal!</h3>
      <button onClick={() => handleButtonModalOpenClick()}>Otwórz</button>
    </section>
  );
}
