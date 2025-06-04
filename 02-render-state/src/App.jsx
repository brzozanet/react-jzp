import { useState } from "react";
import { nanoid } from "nanoid";
import { Form } from "./components/Form";
import { LikesCounter } from "./components/LikesCounter";
import { Plot } from "./components/Plot";
import { Reviews } from "./components/Reviews";

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

function App() {
  const [reviews, setReviews] = useState(backendReviews);
  const [numberOfLikes, setNumberOfLikes] = useState(null);
  const [counterShown, setCounterShown] = useState(true);

  const handleCaonterShownClick = () =>
    setCounterShown((prevState) => !prevState);

  return (
    <>
      <h1>Wataha, sezon 1</h1>
      <h2>Rok produkcji: 2015</h2>
      {counterShown && (
        <LikesCounter
          numberOfLikes={numberOfLikes}
          setNumberOfLikes={setNumberOfLikes}
        />
      )}
      <div>
        <br />
        <button onClick={handleCaonterShownClick}>
          {counterShown ? "Ukryj" : "Pokaż"} licznik polubień
        </button>
      </div>
      <Plot />
      <Reviews state={reviews} />
      <Form state={reviews} setter={setReviews} />
    </>
  );
}

export default App;
