import css from "./NotesList.module.css";
import { Title } from "../Title/Title";
import { AddNewButton } from "../AddNewButton/AddNewButton";
import { TopBar } from "../TopBar/TopBar";
import { ShortNote } from "../ShortNote/ShortNote";
import { useLoaderData } from "react-router-dom";

const NotesContainer = ({ children }) => (
  <div className={css["notes-container"]}>{children}</div>
);

const Notes = ({ children }) => (
  <div className={css["notes-list"]} role="list">
    {children}
  </div>
);

export function NotesList() {
  const notes = useLoaderData();
  // const { folderId } = useParams();

  return (
    <>
      <NotesContainer>
        <Notes>
          <TopBar>
            <Title>Notatki</Title>
            <AddNewButton>+</AddNewButton>
          </TopBar>
          {notes
            // .filter((note) => note.folderId === Number(folderId))
            .map((note) => (
              <ShortNote role="listitem" note={note}></ShortNote>
            ))}
        </Notes>
      </NotesContainer>
    </>
  );
}
