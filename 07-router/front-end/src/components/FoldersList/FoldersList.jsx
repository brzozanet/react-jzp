import css from "./FoldersList.module.css";
import { Folder } from "../Folder/Folder";
import { Title } from "../Title/Title";
import { TopBar } from "../TopBar/TopBar";
import { AddNewButton } from "../AddNewButton/AddNewButton";
import { nanoid } from "nanoid";
import { Form, NavLink, redirect, useLoaderData } from "react-router-dom";

const Folders = ({ children }) => (
  <div className={css["folders-column"]}>{children}</div>
);

const UserCreatedFolders = ({ children }) => (
  <div role="list" className={css["folders-list"]}>
    {children}
  </div>
);

export const addFolderForm = async ({ request }) => {
  const formData = await request.formData();
  const folderName = formData.get("folder-name");
  return fetch("http://localhost:3000/folders", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: folderName,
    }),
  })
    .then((response) => response.json())
    .then((newFolderData) => redirect(`/notes/${newFolderData.id}`));
};

export function FoldersList() {
  const folders = useLoaderData();

  return (
    <>
      <Folders>
        <TopBar>
          <Form method="POST" action="/">
            <input
              className={css["new-folder-input"]}
              type="text"
              name="folder-name"
              placeholder="Nazwa folderu"
            />
            <AddNewButton type="submit">+</AddNewButton>
          </Form>
        </TopBar>
        <Title>Foldery</Title>
        <UserCreatedFolders>
          {folders.map((folder) => (
            <NavLink to={`/notes/${folder.id}`} key={nanoid()}>
              {({ isActive }) => {
                return <Folder active={isActive}>{folder.name}</Folder>;
              }}
            </NavLink>
            // <Link key={nanoid()} to={`/notes/${folder.id}`}>
            //   <Folder>{folder.name}</Folder>
            // </Link>
          ))}
        </UserCreatedFolders>
        {/* <Folder icon="archive">Archiwum</Folder> */}
      </Folders>
    </>
  );
}

export default FoldersList;
