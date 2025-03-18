import css from "./NotFound.module.css";
import { Link } from "react-router-dom";

export function NoteNotFound() {
  return (
    <>
      <div className={css["error-page"]}>
        <h1>404</h1>
        <h2>Ups... nie ma takiej notatki</h2>
        <p>Niepoprawny adres</p>
        <Link to="..">Wróć</Link>
      </div>
    </>
  );
}
