import styles from "./Product.module.css";

function Product({ product, currency }) {
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
                        {currency === "PLN"
                            ? product.pricePLN
                            : product.priceUSD}{" "}
                        {currency === "PLN" ? "zł" : "$"}
                    </p>
                </div>
            </div>
        </>
    );
}

export { Product };
