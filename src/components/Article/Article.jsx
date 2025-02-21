import { Recipe } from "../Recipe/Recipe";
import { Button } from "../Button/Button";

export function Article({ isLoggedIn, setIsLoggedIn }) {
  return (
    <article>
      <Recipe />

      {isLoggedIn ? (
        <Button onClick={() => alert("Przepis polubiony!")}>Lubię to!</Button>
      ) : (
        <Button onClick={() => setIsLoggedIn(true)}>Logowanie</Button>
      )}
    </article>
  );
}
