import { Button } from "../Button/Button";
import css from "./TopBar.module.css";

export function TopBar({ isLoggedIn, setIsLoggedIn }) {
  return (
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
  );
}
