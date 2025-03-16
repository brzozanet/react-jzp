import css from "./Note.module.css";
import RemoveIcon from "../../assets/remove.svg";
import { TopBar } from "../TopBar/TopBar";
import { Form, useLoaderData } from "react-router-dom";
import { nanoid } from "nanoid";

const NoteEditor = ({ children }) => (
  <div className={css["note-editor"]}>{children}</div>
);

export const editNoteForm = async (args) => {
  console.log(args.params.noteId);
  const formData = await args.request.formData();
  const noteTitle = formData.get("note-title");
  const noteBody = formData.get("note-body");
  return fetch(`http://localhost:3000/notes/${args.params.noteId}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      title: noteTitle,
      body: noteBody,
    }),
  });
};

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
          <Form method="PATCH">
            <input type="text" name="note-title" defaultValue={note.title} />
            <textarea name="note-body" defaultValue={note.body} />
          </Form>
        </NoteEditor>
      </div>
    </>
  );
}
