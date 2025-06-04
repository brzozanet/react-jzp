/* eslint-disable react/prop-types */

import { nanoid } from "nanoid";
import { useState } from "react";

export const Form = ({ state, setter }) => {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleTextaarea = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleReviewsForm = (event) => {
    event.preventDefault();
    const author = inputValue;
    const text = textareaValue;
    setter([...state, { id: nanoid(), author, text }]);

    setInputValue("");
    setTextareaValue("");
  };

  return (
    <>
      <h2>Dodaj recenzję</h2>
      <form onSubmit={handleReviewsForm}>
        <div>
          <div>
            <label htmlFor="author">Autor:</label>
          </div>
          <input
            type="text"
            id="author"
            name="author"
            value={inputValue}
            onChange={handleInput}
          />
        </div>
        <div>
          <div>
            <label htmlFor="text">Tekst:</label>
          </div>
          <textarea
            name="text"
            id="text"
            value={textareaValue}
            onChange={handleTextaarea}
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={inputValue === "" || textareaValue === ""}
        >
          Dodaj
        </button>
      </form>
    </>
  );
};
