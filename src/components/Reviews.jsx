import { useState } from "react";

export const Reviews = () => {
  const [review, setReview] = useState(null);

  const handleReviewsForm = (event) => {
    event.preventDefault();
    const author = event.target[0].value;
    const text = event.target[1].value;

    // FIXME: not working
    setReview({ author, text });
    console.log(review);
  };

  return (
    <>
      <h2>Recenzje</h2>

      <h2>Dodaj recenzję</h2>
      <form onSubmit={handleReviewsForm}>
        <div>
          <div>
            <label htmlFor="author">Autor:</label>
          </div>
          <input type="text" id="author" name="author" />
        </div>
        <div>
          <div>
            <label htmlFor="text">Tekst:</label>
          </div>
          <textarea name="text" id="text"></textarea>
        </div>
        <button>Dodaj</button>
      </form>
    </>
  );
};
