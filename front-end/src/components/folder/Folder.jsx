import styles from "./Folder.module.css";
import FolderIcon from "../../assets/folder.svg";

const Folder = ({ children, active }) => {
    return (
        <div
            className={[styles.folder, active ? styles.active : ""].join(" ")}
            role="listitem"
        >
            <img src={FolderIcon} />
            {children}
        </div>
    );
};

export { Folder };
