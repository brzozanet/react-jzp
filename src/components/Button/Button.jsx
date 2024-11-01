import css from "./Button.module.css";

export function Button({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`${css.button} ${active ? css.active : ""}`}
    >
      {children}
    </button>
  );
}
