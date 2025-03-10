import { useEffect, useState } from "react";
import css from "./Results.module.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export function Results() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    fetch(`${BASE_URL}/results.json`)
      .then((response) => {
        if (response.ok) {
          setError(null);
          return response.json();
        }
        throw new Error("Coś poszło nie tak...");
      })

      .then((response) => {
        if (isCancelled) {
          return;
        }
        setResults(response);
      })

      .catch((error) => {
        setError(error);
      });

    return () => {
      isCancelled = true;
    };
  }, []);

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
