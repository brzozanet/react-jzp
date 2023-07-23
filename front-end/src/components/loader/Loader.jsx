import styles from "./Loader.module.css";
import LoaderImage from "../../assets/loader.gif";

const Loader = () => {
    return (
        <div className={styles.loader}>
            <img src={LoaderImage}></img>
        </div>
    );
};

export default Loader;
