import { css, styled } from "styled-components";

const activeNote = css`
    border-bottom: 1px solid rgb(255, 228, 145);
    background-color: rgb(255, 228, 145);
    border-radius: 10px;
`;

const StyledShortNote = styled.div`
    border-bottom: 1px solid #d5d0d0;
    &:hover {
        ${activeNote}
    }

    ${(p) => p.active && activeNote}

    margin: 10px;

    transition: background-color 0.3s ease;
    padding: 10px;
    cursor: pointer;
`;

const StyledNoteTitle = styled.div`
    font-size: 12px;
    font-weight: 600;
    color: black;
    margin-bottom: 5px;
    display: flex;
    padding-right: 5px;
    justify-content: space-between;
    align-items: center;
`;

const StyledNoteBody = styled.p`
    font-size: 12px;
    font-weight: 300;
    color: grey;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const StyledImage = styled.img`
    width: 12px;
    height: 12px;
`;

export { StyledShortNote, StyledNoteTitle, StyledNoteBody, StyledImage };
