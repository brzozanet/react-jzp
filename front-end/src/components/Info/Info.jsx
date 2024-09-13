import css from "./Info.module.css";

export function Info({ children }) {
  return (
    <section className={css.section}>
      <p>Czy wiesz, że...</p>
      <br />
      <p>{children}</p>
    </section>
  );
}
