import styles from "./CategoriesMenu.module.css";
import { CATEGORIES } from "../../constants/productCategories";

function CategoriesMenu() {
    return (
        <div className={styles.menu}>
            <div className={styles.menuContainer}>
                <ul className={styles.menuContent}>
                    {CATEGORIES.map(({ path, categoryName }) => (
                        <li key={path}>
                            <a className={styles.menuItem} href={`/${path}`}>
                                {categoryName}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export { CategoriesMenu };
