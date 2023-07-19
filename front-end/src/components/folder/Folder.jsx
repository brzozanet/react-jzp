import { StyledFolder } from "./style";

const Folder = ({ children, active }) => {
    return <StyledFolder active={active}>{children}</StyledFolder>;
};

export default Folder;
