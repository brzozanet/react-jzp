import Folder from "../folder/Folder";
import AddNewButton from "../add-new-button/AddNewButton";
import FolderIcon from "../../assets/folder.svg";
import { NavLink, useLoaderData, Form, redirect } from "react-router-dom";

import {
    FolderImage,
    StyledFolders,
    StyledInput,
    UserCreatedFolders,
} from "./style";
import { Title } from "../title/Title";
import TopBar from "../top-bar/TopBar";

export async function createFolder(args) {
    const data = await args.request.formData();
    const folderName = data.get("folder-name");

    return fetch("http://localhost:3000/folders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: folderName,
        }),
    })
        .then((result) => result.json())
        .then((folder) => redirect(`/notes/${folder.id}`));
}

const FoldersList = () => {
    const foldersList = useLoaderData();

    return (
        <StyledFolders>
            <TopBar>
                <Form method="POST">
                    <StyledInput
                        type="text"
                        name="folder-name"
                        placeholder="Nazwa folderu"
                    />
                    <AddNewButton>+</AddNewButton>
                </Form>
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
        </StyledFolders>
    );
};

export default FoldersList;
