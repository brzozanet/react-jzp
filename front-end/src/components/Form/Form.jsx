import { useState } from "react";
import css from "./Form.module.css";
import { Button } from "../Button/Button";

export function Form({ addWord }) {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [category, setCategory] = useState("noun");

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      word,
      translation,
      category,
    };

    addWord(newItem);
    setWord("");
    setTranslation("");
    setCategory("noun");
  }
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.row}>
        <div className={css.cell}>
          <label htmlFor="word">Słowo</label>
          <input
            type="text"
            id="word"
            className={css.input}
            value={word}
            onChange={(event) => setWord(event.target.value)}
          />
        </div>
        <div className={css.cell}>
          <label htmlFor="translation">Tłumaczenie</label>
          <input
            type="text"
            id="translation"
            className={css.input}
            value={translation}
            onChange={(event) => setTranslation(event.target.value)}
          />
        </div>
      </div>
      <div>Wybierz kategorię:</div>
      <div className={css.category}>
        <input
          type="radio"
          name="category"
          id="category-noun"
          checked={category === "noun"}
          onChange={() => setCategory("noun")}
        />
        <label htmlFor="category-noun">Rzeczownik</label>
      </div>
      <div className={css.category}>
        <input
          type="radio"
          name="category"
          id="category-verb"
          checked={category === "verb"}
          onChange={() => setCategory("verb")}
        />
        <label htmlFor="category-verb">Czasownik</label>
      </div>
      <div>
        <Button>Dodaj</Button>
      </div>
    </form>
  );
}
