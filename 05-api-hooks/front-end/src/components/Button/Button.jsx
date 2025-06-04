import css from "./Button.module.css";

export function Button({ onClick, disabled, children }) {
  return (
    <button onClick={onClick} disabled={disabled} className={css.button}>
      {children}
    </button>
  );
}
