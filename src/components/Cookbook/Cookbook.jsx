import { Article } from "../Article/Article";
import css from "./Cookbook.module.css";

export function Cookbook({ isLoggedIn, setIsLoggedIn }) {
  return (
    <main className={css.main}>
      <h1>Przepisy na smaczne rzeczy</h1>
      <Article isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </main>
  );
}
