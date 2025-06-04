import { Button } from "../Button/Button";
import css from "./TopBar.module.css";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

export function TopBar() {
  const [isLoggedIn, setIsLoggedIn] = useContext(LoginContext);

  return (
    <>
      <div className={css.wrapper}>
        <span className={css.title}>Reactowe przepisy</span>
        {isLoggedIn ? (
          <>
            <span>Zalogowany</span>
            <Button onClick={() => setIsLoggedIn(false)}>Wyloguj</Button>
          </>
        ) : (
          <Button onClick={() => setIsLoggedIn(true)}>Zaloguj</Button>
        )}
      </div>
    </>
  );
}
