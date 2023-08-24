"use client";

import styles from "./CurrencySelector.module.css";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { useContext } from "react";

function CurrencySelector() {
    const [currency, setCurrency] = useContext(CurrencyContext);
    return (
        <select
            className={styles.currencySelector}
            defaultValue={currency}
            onChange={(e) => {
                setCurrency(e.target.value);
            }}
        >
            <option value="PLN">PLN</option>
            <option value="USD">USD</option>
        </select>
    );
}

export { CurrencySelector };
