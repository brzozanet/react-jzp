import { useState } from "react";

export function Item({ emoji }) {
  const [zoomed, setZoomed] = useState(false);

  // let emojiInlineSize;
  // if (zoomed) {
  //   emojiInlineSize = "64px";
  // } else {
  //   emojiInlineSize = "32px";
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
