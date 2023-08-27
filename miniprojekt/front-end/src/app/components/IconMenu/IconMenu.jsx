import HeartIcon from "/public/favourite.svg";
import BagIcon from "/public/bag.svg";

import styles from "./IconMenu.module.css";

function IconMenu() {
    return (
        <ul className={styles.menu}>
            <li>
                <a href="/ulubione">
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
