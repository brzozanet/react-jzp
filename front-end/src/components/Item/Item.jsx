import { useState } from "react";
import css from "./Item.module.css";

export function Item({ word, translation, id }) {
  const [isTranslationShown, setIsTranslationShown] = useState(false);

  function handleDeleteClick() {
    alert(`Delete element with ID: ${id}`);
  }

  return (
    <li className={css.item}>
      <span className={css.word}>
        (PL) <strong>{word}</strong>
      </span>
      <span className={css.word}>
        (ANG)
        <strong> {isTranslationShown ? translation : "******"}</strong>
      </span>
      <div className={css.buttons}>
        <button
          onClick={() => setIsTranslationShown((prevValue) => !prevValue)}
          className={css.button}
        >
          👁️
        </button>
        <button onClick={handleDeleteClick} className={css.button}>
          ✔️
        </button>
      </div>
    </li>
  );
}
