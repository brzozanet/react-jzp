import css from "./FoldersList.module.css";
import { Folder } from "../Folder/Folder";
import { Title } from "../Title/Title";
import { TopBar } from "../TopBar/TopBar";
import { AddNewButton } from "../AddNewButton/AddNewButton";
import { nanoid } from "nanoid";
import { NavLink, useLoaderData } from "react-router-dom";

const Folders = ({ children }) => (
  <div className={css["folders-column"]}>{children}</div>
);

const UserCreatedFolders = ({ children }) => (
  <div role="list" className={css["folders-list"]}>
    {children}
  </div>
);

export function FoldersList() {
  const folders = useLoaderData();

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
            <Folder key={nanoid()}>{folder.name}</Folder>
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
