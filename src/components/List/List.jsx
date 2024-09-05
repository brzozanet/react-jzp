import { nanoid } from "nanoid";
import { Item } from "../Item/Item";
import css from "./List.module.css";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

export function List() {
  const handleEmojisCounterClick = () => {
    alert(`Liczba emoji to: ${emojis.length}`);
  };

  return (
    <>
      <button className={css.btn} onClick={handleEmojisCounterClick}>
        Pokaż liczbę emoji
      </button>
      <ul className={css.list}>
        {emojis.map((emoji) => (
          <Item key={nanoid()} emoji={emoji} />
        ))}
      </ul>
    </>
  );
}
