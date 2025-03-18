import css from "./NotFound.module.css";
import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <>
      <div className={css["error-page"]}>
        <h1>404</h1>
        <h2>Ups... nie ma takiej strony</h2>
        <p>Niepoprawny adres</p>
        <Link to="..">Wróć</Link>
      </div>
    </>
  );
}
