import { Recipe } from "../Recipe/Recipe";
import { Button } from "../Button/Button";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

export function Article() {
  const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext);

  return (
    <>
      <LoginContext value={isLoggedIn}>
        <article>
          <Recipe />

          {isLoggedIn ? (
            <Button onClick={() => alert("Przepis polubiony!")}>
              Lubię to!
            </Button>
          ) : (
            <>
              <p>Zaloguj się, aby polubić przepis</p>
              <Button onClick={() => setIsLoggedIn(true)}>Logowanie</Button>
            </>
          )}
        </article>
      </LoginContext>
    </>
  );
}
