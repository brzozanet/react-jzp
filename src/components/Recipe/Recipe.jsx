import { RecipeContext } from "../../context/RecipeContext";
import { useContext } from "react";
import css from "./Recipe.module.css";

export function Recipe() {
  const { name, ingredients, description, img } = useContext(RecipeContext);

  return (
    <>
      <h2>{name}</h2>
      <img src={img} alt="" className={css.img} />
      <span>Składniki:</span>
      <ul className={css.list}>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <p className={css.description}>{description}</p>
    </>
  );
}
