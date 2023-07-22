import { Title } from "../title/style";
import { StyledNotes, NotesContainer } from "./styles";
import AddNewButton from "../add-new-button/AddNewButton";
import TopBar from "../top-bar/TopBar";
import ShortNote from "../short-note/ShortNote";
import { useLoaderData, Outlet, NavLink } from "react-router-dom";

const NotesList = () => {
    const notes = useLoaderData();

    return (
        <NotesContainer>
            <StyledNotes>
                <TopBar>
                    <Title>
                        Notatki z: <span>{}</span>
                    </Title>
                    <AddNewButton>+</AddNewButton>
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
