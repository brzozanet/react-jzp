import css from "./Note.module.css";
import RemoveIcon from "../../assets/remove.svg";
import { TopBar } from "../TopBar/TopBar";
import { Form, useLoaderData, useSubmit } from "react-router-dom";

const NoteEditor = ({ children }) => (
  <div className={css["note-editor"]}>{children}</div>
);

export const editNoteForm = async ({ request, params }) => {
  const formData = await request.formData();
  const noteTitle = formData.get("note-title");
  const noteBody = formData.get("note-body");
  return fetch(`http://localhost:3000/notes/${params.noteId}`, {
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
  const submit = useSubmit();

  return (
    <>
      <div className={css.container}>
        <TopBar>
          <button className={css.button}>
            <img className={css.image} src={RemoveIcon} />
          </button>
        </TopBar>
        <NoteEditor key={note.id}>
          <Form
            method="PATCH"
            onChange={(event) => {
              submit(event.currentTarget);
            }}
          >
            <input type="text" name="note-title" defaultValue={note.title} />
            <textarea name="note-body" defaultValue={note.body} />
          </Form>
        </NoteEditor>
      </div>
    </>
  );
}
