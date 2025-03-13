import css from "./AddNewButton.module.css";

export function AddNewButton({ children }) {
  return (
    <>
      <button className={css["add-new-button"]}>{children}</button>
    </>
  );
}
