import { useGetData } from "../../hooks/useGetData";
import css from "./Stocks.module.css";

export function Stocks() {
  const { data: stocks, error } = useGetData("stocks.json");

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
