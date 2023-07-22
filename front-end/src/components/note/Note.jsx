import { useLoaderData, Form, useSubmit } from "react-router-dom";
import { StyledNoteBody, StyledNoteTitle, StyledNote } from "./styles";

export async function updateNote(args) {
    const data = await args.request.formData();
    const title = data.get("title");
    const body = data.get("body");

    debugger;

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
    const [note] = useLoaderData();
    const submit = useSubmit();

    return (
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
    );
};

export default Note;
