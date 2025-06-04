import { Button } from "../Button/Button";
import css from "./TodoItem.module.css";

export function TodoItem({
  name,
  done,
  onDeleteButtonClick,
  onDoneButtonClick,
}) {
  return (
    <li className={css.item}>
      <span className={`${css.name} ${done ? css.done : ""}`}>{name}</span>
      {!done && <Button onClick={onDoneButtonClick}>Zrobione</Button>}
      <Button onClick={onDeleteButtonClick}>Usuń</Button>
    </li>
  );
}
