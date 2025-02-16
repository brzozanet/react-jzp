import css from "./List.module.css";
import { Button } from "../Button/Button";
import { nanoid } from "nanoid";

export function List({ recipes, onSelectRecipe }) {
  return (
    <nav className={css.nav}>
      <span className={css.title}>Lista przepisów:</span>
      <ul className={css.list}>
        {recipes.map(({ id, name }) => (
          <li key={nanoid()} className={css.item}>
            <Button onClick={() => onSelectRecipe(id)}>{name}</Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
