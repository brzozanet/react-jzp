import css from "./FoldersList.module.css";
import { useState, useEffect } from "react";
import { Folder } from "../Folder/Folder";
import { Title } from "../Title/Title";
import { TopBar } from "../TopBar/TopBar";
import { AddNewButton } from "../AddNewButton/AddNewButton";
import { Loader } from "../Loader/Loader";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";

const Folders = ({ children }) => (
  <div className={css["folders-column"]}>{children}</div>
);
const UserCreatedFolders = ({ children }) => (
  <div role="list" className={css["folders-list"]}>
    {children}
  </div>
);

export function FoldersList() {
  const [folders, getFolders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/folders")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Bład podczas pobierania danych folderów");
      })

      .then((response) => {
        setTimeout(() => {
          // NOTE: loading simulation
          setIsLoading(false);
        }, 1000);
        return getFolders(response);
      })

      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <>
      {isLoading && <Loader />}
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
            <NavLink key={nanoid()} to={`/notes/${folder.id}`}>
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
