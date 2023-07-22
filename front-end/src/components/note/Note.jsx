import { useLoaderData } from "react-router-dom";
import { StyledNoteBody, StyledNoteTitle, StyledNote } from "./styles";

const Note = () => {
    const [note] = useLoaderData();

    return (
        <StyledNote>
            <StyledNoteTitle value={note.title} onChange={() => {}} />
            <StyledNoteBody value={note.body} onChange={() => {}} />
        </StyledNote>
    );
};

export default Note;
