import { nanoid } from "nanoid";
import { useState } from "react";
import { Review } from "./Review";

const backendReviews = [
  {
    id: nanoid(),
    author: "Jan Kowalski",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, nesciunt!",
  },
  {
    id: nanoid(),
    author: "Amelia Sarnowska",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique excepturi maxime quis veritatis, dignissimos quia.",
  },
  {
    id: nanoid(),
    author: "Katarzyna Atemborska",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
  },
];

export const Reviews = () => {
  const [reviews, setReviews] = useState(backendReviews);
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const reviewsElement = reviews.map((review) => (
    <Review author={review.author} text={review.text} key={nanoid()} />
  ));

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
    setReviews([...reviews, { id: nanoid(), author, text }]);
  };

  return (
    <>
      <h2>Recenzje</h2>
      {reviewsElement}
      {/* {review ? (
        <article>
          <p>
            <strong>{review.author}:</strong>
            <br />
            {review.text}
          </p>
        </article>
      ) : (
        ""
      )} */}
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
