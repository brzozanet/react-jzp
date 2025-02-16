import { nanoid } from "nanoid";
import css from "./Recipe.module.css";

export function Recipe({ name, ingredients, description, img }) {
  return (
    <>
      <h2>{name}</h2>
      <img src={img} alt="" className={css.img} />
      <span>Składniki:</span>
      <ul className={css.list}>
        {ingredients.map((ingredient) => (
          <li key={nanoid()}>{ingredient}</li>
        ))}
      </ul>
      <p className={css.description}>{description}</p>
    </>
  );
}
