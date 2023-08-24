import HeartIcon from "../../assets/favourite.svg";
import BagIcon from "../../assets/bag.svg";

import styles from "./IconMenu.module.css";

function ActiveItem({ children }) {
    return <div className={styles.activeItem}>{children}</div>;
}

function IconMenu() {
    return (
        <ul className={styles.menu}>
            <li>
                <a href="ulubione">
                    <img className={styles.icon} src={HeartIcon.src} />
                </a>
            </li>
            <li>
                <a href="/koszyk" className={styles.cart}>
                    <img className={styles.icon} src={BagIcon.src} />
                </a>
            </li>
        </ul>
    );
}

export { IconMenu };
