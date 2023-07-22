import styles from "./ShortNote.module.css";
import RemoveIcon from "../../assets/remove.svg";

const ShortNote = ({ note, active }) => (
    <div
        className={[styles["short-note"], active ? styles.active : ""].join(
            " "
        )}
    >
        <div className={styles.title}>
            {note.title}
            <img className={styles.image} src={RemoveIcon} />
        </div>
        <div className={styles.body}>{note.body}</div>
    </div>
);

export default ShortNote;
