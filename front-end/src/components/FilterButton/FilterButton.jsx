import css from "./FilterButton.module.css";

export function FilterButton({ onClick, active, children }) {
  return (
    <button
      onClick={onClick}
      className={`${css.button} ${active ? css.active : ""}`}
    >
      {children}
    </button>
  );
}
