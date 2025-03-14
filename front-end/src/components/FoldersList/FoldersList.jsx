import css from "./FoldersList.module.css";
import { useState } from "react";
import { Folder } from "../Folder/Folder";
import { Title } from "../Title/Title";
import { TopBar } from "../TopBar/TopBar";
import { AddNewButton } from "../AddNewButton/AddNewButton";
import { nanoid } from "nanoid";

const Folders = ({ children }) => (
  <div className={css["folders-column"]}>{children}</div>
);
const UserCreatedFolders = ({ children }) => (
  <div role="list" className={css["folders-list"]}>
    {children}
  </div>
);

export function FoldersList() {
  const [folders] = useState([
    {
      name: "Listy",
      id: 1,
    },
    {
      name: "Przemyślenia",
      id: 2,
    },
  ]);

  return (
    <>
      <Folders>
        <TopBar>
          <input
            className={css["new-folder-input"]}
            type="text"
            placeholder="Nazwa folderu"
          />
          <AddNewButton type="submit">+</AddNewButton>
        </TopBar>
        <Title>Foldery</Title>
        <UserCreatedFolders>
          {folders.map((folder) => (
            <a key={nanoid()} href={`/notes/${folder.id}`}>
              <Folder>{folder.name}</Folder>
            </a>
          ))}
        </UserCreatedFolders>
        {/* <Folder icon="archive">Archiwum</Folder> */}
      </Folders>
    </>
  );
}

export default FoldersList;
