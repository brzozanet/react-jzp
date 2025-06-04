import css from "./ShortNote.module.css";

export function ShortNote({ note, active }) {
  return (
    <>
      <div className={[css["short-note"], active ? css.active : ""].join(" ")}>
        <div className={css.title}>{note.title}</div>
        <div className={css.body}>{note.body}</div>
      </div>
    </>
  );
}
