import { useState } from "react";
import { Modal } from "../Modal/Modal";
import "./Section.css";

export function Section() {
  const [isModalShown, setIsModalShown] = useState(false);

  const handleModalOpenClick = () => {
    console.log("click open");
    setIsModalShown(true);
  };

  return (
    <>
      <section>
        <h2>Nie czekaj!</h2>
        <h3>Otwórz modal!</h3>
        <button onClick={() => handleModalOpenClick()}>Otwórz</button>
      </section>
      {isModalShown && <Modal setIsModalShown={setIsModalShown} />}
    </>
  );
}
