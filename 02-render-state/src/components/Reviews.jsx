/* eslint-disable react/prop-types */

import { nanoid } from "nanoid";
import { Review } from "./Review";

export const Reviews = ({ state }) => {
  const reviewsElement = state.map((review) => (
    <Review author={review.author} text={review.text} key={nanoid()} />
  ));

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
    </>
  );
};
