import styles from "./Bestsellers.module.css";
import { Product } from "../Product/Product";

function Bestsellers({ products, currency }) {
    return (
        <div className={styles.bestellers}>
            <h2>Sprawdź nasze bestellery</h2>

            <div className={styles.productsWrapper}>
                {products.map((product) => (
                    <Product
                        product={product}
                        key={product.id}
                        currency={currency}
                    />
                ))}
            </div>
        </div>
    );
}

export { Bestsellers };
