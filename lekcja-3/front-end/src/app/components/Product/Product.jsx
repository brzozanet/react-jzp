"use client";
import { CurrencyContext } from "@/app/contexts/CurrencyContext";
import styles from "./Product.module.css";

import { useContext } from "react";

function Product({ product }) {
    const [selectedCurrency] = useContext(CurrencyContext);

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
                        {selectedCurrency === "PLN"
                            ? product.pricePLN
                            : product.priceUSD}{" "}
                        {selectedCurrency === "PLN" ? "zł" : "$"}
                    </p>
                </div>
            </div>
        </>
    );
}

export { Product };
