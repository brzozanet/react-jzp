import { useState } from "react";

export const Reviews = () => {
  const [review, setReview] = useState(null);
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

    setReview({ author, text });
  };

  return (
    <>
      <h2>Recenzje</h2>
      {review ? (
        <article>
          <p>
            <strong>{review.author}:</strong>
            <br />
            {review.text}
          </p>
        </article>
      ) : (
        ""
      )}
      <h2>Dodaj recenzję</h2>
      <form onSubmit={handleReviewsForm}>
        <div>
          <div>
            <label htmlFor="author">Autor:</label>
          </div>
          <input type="text" id="author" name="author" onChange={handleInput} />
        </div>
        <div>
          <div>
            <label htmlFor="text">Tekst:</label>
          </div>
          <textarea name="text" id="text" onChange={handleTextaarea}></textarea>
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
