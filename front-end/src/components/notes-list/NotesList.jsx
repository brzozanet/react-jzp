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
import { useParams } from "react-router-dom";

const NotesList = ({ selectedFolder }) => {
    const [notes] = useState([
        {
            id: 1,
            folderId: 1,
            title: "Testowa notatka",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, harum iste earum corrupti amet facere voluptatem dolores aperiam, nobis pariatur ducimus modi cumque expedita ullam, fugit reprehenderit natus in qui?",
        },
        {
            id: 2,
            folderId: 1,
            title: "Lista zakupów",
            body: "Jabłka, gruszki, ziemniaki, woda mineralna, pasta do zębów.",
        },
        {
            id: 3,
            folderId: 1,
            title: "Na wakacje",
            body: "Kupić ubezpieczenie, zarezerować loty, spakować walizkę, zadzwonić do hotelu.",
        },

        {
            id: 5,
            folderId: 2,
            title: "Albert Einstein",
            body: "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
        },
        {
            id: 7,
            title: "Sun Tzu",
            folderId: 2,
            body: "Osiągnąć sto zwycięstw w stu bitwach nie jest szczytem umiejętności. Szczytem umiejętności jest pokonanie przeciwnika bez walki.",
        },
    ]);

    const { folderId } = useParams();
    console.log(folderId);

    const params = useParams();
    console.log(params);

    return (
        <StyledNotes>
            <TopBar>
                <Title>
                    Notatki z: <span>{}</span>
                </Title>
                <AddNewButton>+</AddNewButton>
            </TopBar>

            {notes
                .filter((note) => note.folderId === parseInt(folderId, 10))
                .map((note, idx) => (
                    <StyledShortNote key={idx}>
                        <StyledNoteTitle>
                            {note.title} <StyledImage src={RemoveIcon} />
                        </StyledNoteTitle>
                        <StyledNoteBody>{note.body}</StyledNoteBody>
                    </StyledShortNote>
                ))}
        </StyledNotes>
    );
};

export default NotesList;
