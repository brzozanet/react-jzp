/* eslint-disable react/prop-types */

export const Review = ({ author, text }) => {
  return (
    <>
      <article>
        <p>
          <strong>{author}:</strong>
          <br />
          {text}
        </p>
      </article>
    </>
  );
};
