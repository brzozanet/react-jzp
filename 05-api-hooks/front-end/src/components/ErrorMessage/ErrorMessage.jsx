import css from "./ErrorMessage.module.css";

export function ErrorMessage({ children }) {
  return <span className={css.error}>{children}</span>;
}
