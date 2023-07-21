import styles from "./Folder.module.css";

const Folder = ({ children, active }) => {
    return (
        <div className={[styles.folder, active ? styles.active : ""].join(" ")}>
            {children}
        </div>
    );
};

export default Folder;
