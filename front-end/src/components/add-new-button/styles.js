import { styled } from "styled-components";

const StyledButton = styled.button`
    &:hover {
        color: black;
        border-color: black;
    }

    border: 1px solid grey;
    color: grey;
    cursor: pointer;
    margin-left: 5px;
    background-color: transparent;
    border-radius: 50%;
    width: 27px;
    height: 27px;
    font-size: 20px;
    transform: scale(0.7);
`;

export { StyledButton };
