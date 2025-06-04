import { Item } from "../Item/Item";
import css from "./List.module.css";

export function List({ data, deleteWord }) {
  return (
    <ul className={css.list}>
      {data.map(({ id, word, translation }) => (
        <Item
          key={id}
          id={id}
          word={word}
          translation={translation}
          deleteWord={deleteWord}
        />
      ))}
    </ul>
  );
}
