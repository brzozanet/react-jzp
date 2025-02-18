import { Article } from "../Article/Article";
import css from "./Cookbook.module.css";

export function Cookbook(props) {
  return (
    <main className={css.main}>
      <h1>Przepisy na smaczne rzeczy</h1>
      <Article {...props} />
    </main>
  );
}
