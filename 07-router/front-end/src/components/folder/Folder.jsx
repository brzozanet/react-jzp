import css from "./Folder.module.css";
import FolderIcon from "../../assets/folder.svg";
import ArchiveIcon from "../../assets/remove.svg";

export function Folder({ children, active, icon }) {
  return (
    <>
      <div
        className={[css.folder, active ? css.active : ""].join(" ")}
        role="listitem"
      >
        <img src={icon === "archive" ? ArchiveIcon : FolderIcon} />
        {children}
      </div>
    </>
  );
}
