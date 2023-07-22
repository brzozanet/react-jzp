import Folder from "../folder/Folder";
import AddNewButton from "../add-new-button/AddNewButton";
import FolderIcon from "../../assets/folder.svg";
import RemoveIcon from "../../assets/remove.svg";
import { NavLink, useLoaderData } from "react-router-dom";

import {
    FolderImage,
    StyledFolders,
    StyledInput,
    UserCreatedFolders,
} from "./style";
import { Title } from "../title/Title";
import TopBar from "../top-bar/TopBar";

const FoldersList = () => {
    const foldersList = useLoaderData();

    return (
        <StyledFolders>
            <TopBar>
                <StyledInput type="text" placeholder="Nazwa folderu" />
                <AddNewButton>+</AddNewButton>
            </TopBar>

            <Title>Foldery</Title>
            <UserCreatedFolders>
                {foldersList.map((folder, idx) => (
                    <NavLink to={"/notes/" + folder.id} key={folder.id}>
                        {({ isActive }) => (
                            <Folder active={isActive}>
                                <FolderImage src={FolderIcon} />
                                {folder.name} {isActive}
                            </Folder>
                        )}
                    </NavLink>
                ))}
            </UserCreatedFolders>

            <Folder>
                <FolderImage src={RemoveIcon} />
                Archiwum
            </Folder>
        </StyledFolders>
    );
};

export default FoldersList;
