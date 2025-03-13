import css from "./Loader.module.css";

export function Loader() {
  return (
    <>
      <div className={css.loader}>
        <div className={css["lds-ring"]}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
