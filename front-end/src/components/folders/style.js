import { styled } from "styled-components";

const StyledFolders = styled.div`
    background-color: rgb(221, 220, 220);
    border-right: 1px solid #d5d0d0;
    width: 15%;
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const StyledInput = styled.input`
    padding: 5px;
    border-radius: 5px;
    border: 1px solid grey;
`;

const UserCreatedFolders = styled.div`
    flex: 1;
`;

const FolderImage = styled.img`
    width: 14px;
    height: 14px;
`;

export { StyledFolders, StyledInput, UserCreatedFolders, FolderImage };
