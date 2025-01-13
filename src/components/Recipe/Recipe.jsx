import { nanoid } from "nanoid";
import css from "./Recipe.module.css";

export function Recipe({
  selectedRecipe: { name, ingredients, description, img, country, time },
}) {
  return (
    <>
      <h2>{name}</h2>
      <h3>Kraj pochodzenia: {country}</h3>
      <img src={img} alt="" className={css.img} />
      <span>Składniki:</span>
      <ul className={css.list}>
        {ingredients.map((ingredient) => (
          <li key={nanoid()}>{ingredient}</li>
        ))}
      </ul>
      <p className={css.description}>{description}</p>
      <p className={css.time}>Czas przygotowania: {time}</p>
    </>
  );
}
