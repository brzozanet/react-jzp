import css from "./Note.module.css";
import RemoveIcon from "../../assets/remove.svg";
import { TopBar } from "../TopBar/TopBar";

const NoteEditor = ({ children }) => (
  <div className={css["note-editor"]}>{children}</div>
);

export function Note() {
  return (
    <>
      <div className={css.container}>
        <TopBar>
          <button className={css.button}>
            <img className={css.image} src={RemoveIcon} />
          </button>
        </TopBar>
        <NoteEditor>
          <input type="text" />
          <textarea />
        </NoteEditor>
      </div>
    </>
  );
}
