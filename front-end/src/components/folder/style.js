import { css, styled } from "styled-components";

const activeStyle = css`
    background-color: rgb(206, 207, 208);
`;

const StyledFolder = styled.div`
    &:hover {
        ${activeStyle}
    }

    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    font-size: 14px;
    border-radius: 10px;
    transition: background-color 0.3s ease;
    background-color: transparent;
    gap: 10px;
    margin: 0 10px;

    ${(p) => p.active && activeStyle};
`;

export { StyledFolder };
