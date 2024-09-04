/* eslint-disable react/prop-types */

export const LikesCounter = ({ numberOfLikes, setNumberOfLikes }) => {
  const handleLikeButtonClick = () => {
    setNumberOfLikes((prevNumber) => prevNumber + 1);
  };

  const handleLoveButtonClick = () => {
    setNumberOfLikes((prevNumber) => prevNumber + 3);
  };

  return (
    <>
      {numberOfLikes && <h2>Liczba polubień: {numberOfLikes}</h2>}
      <button onClick={handleLikeButtonClick}>Lubię to!</button>{" "}
      <button onClick={handleLoveButtonClick}>Kocham to!</button>
    </>
  );
};
