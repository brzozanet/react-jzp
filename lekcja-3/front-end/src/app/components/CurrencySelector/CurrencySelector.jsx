"use client";

import { CurrencyContext } from "@/app/contexts/CurrencyContext";
import styles from "./CurrencySelector.module.css";
import { useContext } from "react";

function CurrencySelector() {
    const [selectedCurrency, setSelectedCurrency] = useContext(CurrencyContext);
    return (
        <select
            className={styles.currencySelector}
            value={selectedCurrency}
            onChange={(e) => {
                setSelectedCurrency(e.currentTarget.value);
            }}
        >
            <option value="PLN">PLN</option>
            <option value="USD">USD</option>
        </select>
    );
}

export { CurrencySelector };
