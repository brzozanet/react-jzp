import { useEffect, useState } from "react";
import css from "./Stocks.module.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export function Stocks() {
  const [stocks, setStocks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    fetch(`${BASE_URL}/stocks.json`)
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
        setStocks(response);
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
        <span className={css.error}>{error.message}</span>
      ) : (
        <ul className={css.list}>
          {stocks.map((stock) => (
            <li key={stock.company_name} className={css.item}>
              <div className={css.wrapper}>
                <span className={css.logo}>{stock.company_name[0]}</span>
                <strong className={css.fullName}>
                  {stock.stock_short_name}
                </strong>
                <span className={css.shortName}>{stock.company_name}</span>
                <span className={css.price}>Price: {stock.market_price}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
