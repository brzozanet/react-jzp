import css from "./NotesList.module.css";
import { Title } from "../Title/Title";
import { AddNewButton } from "../AddNewButton/AddNewButton";
import { TopBar } from "../TopBar/TopBar";
import { ShortNote } from "../ShortNote/ShortNote";
import { Form, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { nanoid } from "nanoid";

const NotesContainer = ({ children }) => (
  <div className={css["notes-container"]}>{children}</div>
);

const Notes = ({ children }) => (
  <div className={css["notes-list"]} role="list">
    {children}
  </div>
);

export const addNoteForm = () => {
  console.log("add note");
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
