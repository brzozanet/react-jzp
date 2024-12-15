import css from "./List.module.css";
import { Button } from "../Button/Button";
import { nanoid } from "nanoid";
import { RecipeContext } from "../../context/RecipeContext";

export function List({ recipes, onSelectRecipe }) {
  const selectedRecipeId = RecipeContext._currentValue.id;

  return (
    <nav className={css.nav}>
      <span className={css.title}>Lista przepisów:</span>
      <ul className={css.list}>
        {recipes.map(({ id, name }) => (
          <li key={nanoid()} className={css.item}>
            <Button
              onClick={() => onSelectRecipe(id)}
              active={id === selectedRecipeId}
            >
              {name}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
