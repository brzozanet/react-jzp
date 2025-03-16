import css from "./Note.module.css";
import RemoveIcon from "../../assets/remove.svg";
import { TopBar } from "../TopBar/TopBar";
import { Form, useLoaderData } from "react-router-dom";
import { nanoid } from "nanoid";

const NoteEditor = ({ children }) => (
  <div className={css["note-editor"]}>{children}</div>
);

export function Note() {
  const note = useLoaderData();

  return (
    <>
      <div className={css.container}>
        <TopBar>
          <button className={css.button}>
            <img className={css.image} src={RemoveIcon} />
          </button>
        </TopBar>
        <NoteEditor key={nanoid()}>
          <Form>
            <input type="text" defaultValue={note.title} />
            <textarea defaultValue={note.body} />
          </Form>
        </NoteEditor>
      </div>
    </>
  );
}
