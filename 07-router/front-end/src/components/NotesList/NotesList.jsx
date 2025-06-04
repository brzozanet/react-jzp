import css from "./NotesList.module.css";
import { Title } from "../Title/Title";
import { AddNewButton } from "../AddNewButton/AddNewButton";
import { TopBar } from "../TopBar/TopBar";
import { ShortNote } from "../ShortNote/ShortNote";
import {
  Form,
  NavLink,
  Outlet,
  redirect,
  useLoaderData,
} from "react-router-dom";
import { nanoid } from "nanoid";

const NotesContainer = ({ children }) => (
  <div className={css["notes-container"]}>{children}</div>
);

const Notes = ({ children }) => (
  <div className={css["notes-list"]} role="list">
    {children}
  </div>
);

export const addNoteForm = ({ params }) => {
  return fetch("http://localhost:3000/notes", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      folderId: Number(params.folderId),
      title: "Nowa notatka",
      body: "Nowa treść notatki",
    }),
  })
    .then((response) => response.json())
    .then((newNoteData) => {
      return redirect(`/notes/${newNoteData.folderId}/note/${newNoteData.id}`);
    });
};

export function NotesList() {
  const notes = useLoaderData();
  // const { folderId } = useParams();

  return (
    <>
      <NotesContainer>
        <Notes>
          <TopBar>
            <Title>Notatki</Title>
            <Form method="POST">
              <AddNewButton>+</AddNewButton>
            </Form>
          </TopBar>
          {notes
            // .filter((note) => note.folderId === Number(folderId))
            .map((note) => (
              <NavLink to={`note/${note.id}`} key={nanoid()}>
                {({ isActive }) => {
                  return (
                    <ShortNote
                      active={isActive}
                      role="listitem"
                      note={note}
                    ></ShortNote>
                  );
                }}
              </NavLink>
            ))}
        </Notes>
        <Outlet />
      </NotesContainer>
    </>
  );
}
