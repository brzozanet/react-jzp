import { Article } from "../Article/Article";
import css from "./Cookbook.module.css";

export function Cookbook({ selectedRecipe, title }) {
  return (
    <main className={css.main}>
      <h1>{title}</h1>
      <Article selectedRecipe={selectedRecipe} />
    </main>
  );
}
