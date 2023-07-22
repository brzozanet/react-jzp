import styles from "./ShortNote.module.css";
import { Link } from "react-router-dom";

const ShortNote = ({ note, active }) => (
    <div
        className={[styles["short-note"], active ? styles.active : ""].join(
            " "
        )}
    >
        <div className={styles.title}>{note.title}</div>
        <div className={styles.body}>{note.body}</div>
    </div>
);

export default ShortNote;
