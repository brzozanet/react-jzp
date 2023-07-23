import RemoveIcon from "../../assets/remove.svg";

import { useLoaderData, Form, useSubmit, redirect } from "react-router-dom";
import { StyledNoteBody, StyledNoteTitle, StyledNote } from "./styles";
import TopBar from "../top-bar/TopBar";
import styles from "./Note.module.css";

export async function deleteNote({ params }) {
    return fetch(`http://localhost:3000/notes/${params["noteId"]}`, {
        method: "DELETE",
    }).then(() => redirect(`/notes/${params["folderId"]}`));
}

export async function updateNote(args) {
    const data = await args.request.formData();
    const title = data.get("title");
    const body = data.get("body");

    const noteId = args.params.noteId;

    return fetch(`http://localhost:3000/notes/${noteId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: title,
            body: body,
        }),
    });
}

const Note = () => {
    const note = useLoaderData();
    const submit = useSubmit();

    return (
        <div className={styles.container}>
            <TopBar>
                <Form method="DELETE" action="delete">
                    <button className={styles.button}>
                        <img className={styles.image} src={RemoveIcon} />
                    </button>
                </Form>
            </TopBar>

            <Form
                method="PATCH"
                onChange={(event) => {
                    submit(event.currentTarget);
                }}
            >
                <StyledNote>
                    <StyledNoteTitle name="title" defaultValue={note.title} />
                    <StyledNoteBody name="body" defaultValue={note.body} />
                </StyledNote>
            </Form>
        </div>
    );
};

export default Note;
