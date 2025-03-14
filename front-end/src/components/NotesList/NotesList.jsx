import css from "./NotesList.module.css";
import { useState, useEffect } from "react";
import { Title } from "../Title/Title";
import { AddNewButton } from "../AddNewButton/AddNewButton";
import { TopBar } from "../TopBar/TopBar";
import { ShortNote } from "../ShortNote/ShortNote";
import { Note } from "../Note/Note";
import { Loader } from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";

const NotesContainer = ({ children }) => (
  <div className={css["notes-container"]}>{children}</div>
);

const Notes = ({ children }) => (
  <div className={css["notes-list"]} role="list">
    {children}
  </div>
);

export function NotesList() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { folderId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/notes?${folderId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Błąd podczas pobierania danych notatek");
      })
      .then((response) => {
        setTimeout(() => {
          // NOTE: loading simulation
          setIsLoading(false);
        }, 1000);
        return setNotes(response);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <NotesContainer>
        <Notes>
          <TopBar>
            <Title>Notatki</Title>
            <AddNewButton>+</AddNewButton>
          </TopBar>
          {notes
            .filter((note) => note.folderId === Number(folderId))
            .map((note) => (
              <ShortNote role="listitem" key={nanoid()} note={note}></ShortNote>
            ))}
        </Notes>
        <Note />
      </NotesContainer>
    </>
  );
}
