import { useGetData } from "../../hooks/useGetData";
import css from "./Results.module.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export function Results() {
  const { data: results, error } = useGetData("results.json");

  return (
    <section className={css.section}>
      {error ? (
        error.message
      ) : (
        <ul className={css.list}>
          {results.map((result) => (
            <li key={result.name} className={css.item}>
              <strong>{result.name}</strong>
              <span> - {result.score}</span>
              <div className={css.progressContainer}>
                <div
                  className={css.progress}
                  style={{ width: `${result.score}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
