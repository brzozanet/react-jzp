import css from "./List.module.css";
import { Button } from "../Button/Button";
import { nanoid } from "nanoid";
import { RecipeContext } from "../../context/RecipeContext";
import { useContext } from "react";

export function List({ recipes, onSelectRecipe }) {
  const selectedRecipe = useContext(RecipeContext);
  return (
    <nav className={css.nav}>
      <span className={css.title}>Lista przepisów:</span>
      <ul className={css.list}>
        {recipes.map(({ id, name }) => (
          <li key={nanoid()} className={css.item}>
            <Button
              onClick={() => onSelectRecipe(id)}
              active={selectedRecipe.id === id}
            >
              {name}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
