import styles from "./CurrencySelector.module.css";
import { CURRENCIES } from "../../constants/currencies";

function CurrencySelector() {
    return (
        <select className={styles.currencySelector}>
            <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
            <option value={CURRENCIES.USD}>{CURRENCIES.PLN}</option>
        </select>
    );
}

export { CurrencySelector };
