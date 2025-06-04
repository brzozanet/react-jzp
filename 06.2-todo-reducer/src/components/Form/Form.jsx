import { useState } from "react";
import { Button } from "../Button/Button";
import css from "./Form.module.css";

export function Form({ onFormSubmit }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onFormSubmit(inputValue);
      }}
      className={css.form}
    >
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        className={css.input}
        type="text"
      />
      <Button>Dodaj</Button>
    </form>
  );
}
