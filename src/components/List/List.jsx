import { nanoid } from "nanoid";
import { Item } from "../Item/Item";
import css from "./List.module.css";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

export function List() {
  return (
    <ul className={css.list}>
      {emojis.map((emoji) => (
        <Item key={nanoid()} emoji={emoji} />
      ))}
    </ul>
  );
}
