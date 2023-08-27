import { CURRENCIES, CURRENCY_SIGN } from "../../constants/currencies";
import styles from "./Product.module.css";

function Product({ product }) {
    const currency = CURRENCIES.PLN;
    return (
        <>
            <div className={styles.productCard}>
                <img src={product.images[0]} />

                <button>
                    <div className={styles.favourite}></div>
                </button>

                <div>
                    <p className={styles.name}>{product.name}</p>
                    <p className={styles.productPrice}>
                        {currency === CURRENCIES.PLN
                            ? product.pricePLN
                            : product.priceUSD}{" "}
                        {currency === CURRENCIES.PLN
                            ? CURRENCY_SIGN.PLN
                            : CURRENCY_SIGN.USD}
                    </p>
                </div>
            </div>
        </>
    );
}

export { Product };
