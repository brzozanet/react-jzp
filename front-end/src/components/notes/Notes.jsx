import { useState } from "react";
import { Title } from "../title/style";
import { StyledNotes } from "./styles";
import AddNewButton from "../add-new-button/AddNewButton";
import {
    StyledImage,
    StyledNoteBody,
    StyledNoteTitle,
    StyledShortNote,
} from "../short-note/style";
import TopBar from "../top-bar/TopBar";
import RemoveIcon from "../../assets/remove.svg";

const Notes = ({ selectedFolder }) => {
    const [notes] = useState([
        {
            title: "Testowa notatka",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, harum iste earum corrupti amet facere voluptatem dolores aperiam, nobis pariatur ducimus modi cumque expedita ullam, fugit reprehenderit natus in qui?",
        },
        {
            title: "Lista zakupów",
            body: "Jabłka, gruszki, ziemniaki, woda mineralna, pasta do zębów.",
        },
        {
            title: "Na wakacje",
            body: "Kupić ubezpieczenie, zarezerować loty, spakować walizkę, zadzwonić do hotelu.",
        },
    ]);
    return (
        <StyledNotes>
            <TopBar>
                <Title>
                    Notatki z <span>{selectedFolder}</span>
                </Title>
                <AddNewButton>+</AddNewButton>
            </TopBar>

            {notes.map((note, idx) => (
                <StyledShortNote key={idx} active={idx === 0}>
                    <StyledNoteTitle>
                        {note.title} <StyledImage src={RemoveIcon} />
                    </StyledNoteTitle>
                    <StyledNoteBody>{note.body}</StyledNoteBody>
                </StyledShortNote>
            ))}
        </StyledNotes>
    );
};

export default Notes;
