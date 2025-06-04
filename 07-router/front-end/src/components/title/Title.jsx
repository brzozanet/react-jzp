import css from "./Title.module.css";

export function Title({ children }) {
  return (
    <>
      <p className={css.title}>{children}</p>
    </>
  );
}
