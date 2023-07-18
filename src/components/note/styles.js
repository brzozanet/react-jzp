import { styled } from "styled-components";

const StyledNote = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
`;

const StyledNoteTitle = styled.input`
    font-size: 25px;
    border: none;
    font-weight: 600;
    background-color: transparent;
    display: block;
`;

const StyledNoteBody = styled.textarea`
    display: block;
    flex: 1;
    border: 0;
    background-color: transparent;
    font-family: inherit;
`;

export { StyledNoteTitle, StyledNoteBody, StyledNote };
