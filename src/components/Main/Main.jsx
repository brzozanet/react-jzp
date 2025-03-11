import { Section } from "../Section/Section";
import "./Main.css";

export function Main({ setIsModalShown }) {
  return (
    <main>
      <p>
        Ta strona reprezentuje prostą aplikację, w której chcemy wykorzystać
        modal. Po kliknięciu na przycisk znajdujący się po prawej stronie, na
        ekranie powinien pojawić się modal potwierdzający wykonanie akcji.
      </p>
      <Section setIsModalShown={setIsModalShown} />
    </main>
  );
}
