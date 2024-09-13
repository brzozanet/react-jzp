import css from "./Button.module.css";

export function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className={css.button}>
      {children}
    </button>
  );
}
