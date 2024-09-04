import { useState } from "react";
import "./Item.css";

export function Item({ emoji }) {
  const [zoomed, setZoomed] = useState(false);

  // let emojiInlineSize;
  // if (zoomed) {
  //   transform = "scale(2)";
  // } else {
  //   transform = "scale(1)";
  // }

  return (
    <li className="item">
      {/* <span className="emoji" style={{ fontSize: emojiInlineSize }}> */}
      <span className={`emoji ${zoomed ? "zoomed" : ""}`}>{emoji}</span>
      <button
        className="btn"
        onClick={() => {
          setZoomed((prevState) => !prevState);
        }}
      >
        {zoomed ? "Oddal" : "Przybliż"}
      </button>
    </li>
  );
}
