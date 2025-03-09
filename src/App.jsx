import { useReducer } from "react";
import css from "./App.module.css";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { getSubheading } from "./utils/getSubheading";
import { todos } from "./database/todos";
import { appReducer } from "./reducers/appReducer";

function App() {
  const [state, dispatch] = useReducer(appReducer, {
    todos,
    isFormShown: false,
  });

  function addItem(newTodoName) {
    dispatch({ type: "add", newTodoName });
  }

  function deleteItem(id) {
    dispatch({ type: "delete", id });
  }

  function finishItem(id) {
    dispatch({ type: "finish", id });
  }

  function toggleFormShow() {
    dispatch({ type: "toggle" });
  }

  const existingItems = state.todos.filter((todo) => todo.done === false);

  return (
    <div className={css.container}>
      <header className={css.header}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>{getSubheading(existingItems.length)}</h2>
        </div>
        {!state.isFormShown && (
          <button onClick={() => toggleFormShow()} className={css.button}>
            +
          </button>
        )}
      </header>
      {state.isFormShown && (
        <Form onFormSubmit={(newTodoName) => addItem(newTodoName)} />
      )}
      <ul>
        {state.todos.map(({ id, name, done }) => (
          <TodoItem
            key={id}
            name={name}
            done={done}
            onDeleteButtonClick={() => deleteItem(id)}
            onDoneButtonClick={() => finishItem(id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
