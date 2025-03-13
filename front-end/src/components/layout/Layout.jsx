import css from "./Layout.module.css";
export function Layout({ children }) {
  return (
    <>
      <div className={css["flex-container"]}>{children}</div>
    </>
  );
}
