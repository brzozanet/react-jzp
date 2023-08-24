"use client";

import styles from "./CurrencySelector.module.css";

function CurrencySelector({ currency }) {
    return (
        <select
            className={styles.currencySelector}
            defaultValue={currency}
            onChange={(e) => {
                window.location.href = `/${e.currentTarget.value}/mezczyzna`;
            }}
        >
            <option value="PLN">PLN</option>
            <option value="USD">USD</option>
        </select>
    );
}

export { CurrencySelector };
