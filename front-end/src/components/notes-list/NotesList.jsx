import { Title } from "../title/style";
import { StyledNotes, NotesContainer } from "./styles";
import AddNewButton from "../add-new-button/AddNewButton";
import TopBar from "../top-bar/TopBar";
import ShortNote from "../short-note/ShortNote";
import {
    useLoaderData,
    Outlet,
    NavLink,
    Form,
    redirect,
} from "react-router-dom";

export function createNewNote({ params }) {
    debugger;
    return fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "Nowa notatka",
            body: "Tutaj wpisz treść swojej notatki",
            folderId: parseInt(params.folderId, 10),
        }),
    })
        .then((result) => result.json())
        .then((note) => redirect(`/notes/${note.folderId}/note/${note.id}`));
}

const NotesList = () => {
    const notes = useLoaderData();

    return (
        <NotesContainer>
            <StyledNotes>
                <TopBar>
                    <Title>Notatki</Title>
                    <Form method="POST">
                        <AddNewButton>+</AddNewButton>
                    </Form>
                </TopBar>

                {notes.map((note, idx) => (
                    <NavLink
                        to={`/notes/${note.folderId}/note/${note.id}`}
                        key={idx}
                    >
                        {({ isActive }) => (
                            <ShortNote
                                active={isActive}
                                note={note}
                            ></ShortNote>
                        )}
                    </NavLink>
                ))}
            </StyledNotes>
            <Outlet />
        </NotesContainer>
    );
};

export default NotesList;
