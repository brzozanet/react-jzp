import { Recipe } from "../Recipe/Recipe";
import { Button } from "../Button/Button";

export function Article({ selectedRecipe }) {
  return (
    <article>
      <Recipe selectedRecipe={selectedRecipe} />
      <Button onClick={() => alert("Przepis polubiony!")}>Lubię to!</Button>
    </article>
  );
}
