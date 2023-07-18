import { useState } from "react";
import Folder from "../folder/Folder";
import AddNewButton from "../add-new-button/AddNewButton";
import FolderIcon from "../../assets/folder.svg";
import RemoveIcon from "../../assets/remove.svg";

import {
    FolderImage,
    StyledFolders,
    StyledInput,
    UserCreatedFolders,
} from "./style";
import { Title } from "../title/Title";
import TopBar from "../top-bar/TopBar";

const Folders = () => {
    const [foldersList] = useState(["Listy", "Przemyslenia"]);

    return (
        <StyledFolders>
            <TopBar>
                <StyledInput type="text" placeholder="Nazwa folderu" />
                <AddNewButton>+</AddNewButton>
            </TopBar>

            <Title>Foldery</Title>
            <UserCreatedFolders>
                {foldersList.map((folder, idx) => (
                    <Folder active={idx === 0} key={idx}>
                        <FolderImage src={FolderIcon} />
                        {folder}
                    </Folder>
                ))}
            </UserCreatedFolders>

            <Folder>
                <FolderImage src={RemoveIcon} />
                Archiwum
            </Folder>
        </StyledFolders>
    );
};

export default Folders;
