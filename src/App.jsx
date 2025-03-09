import { useReducer, useState } from "react";
import css from "./App.module.css";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { getSubheading } from "./utils/getSubheading";
import { todos } from "./database/todos";
import { nanoid } from "nanoid";

const todosReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          name: action.newTodoName,
          done: false,
          id: nanoid(),
        },
      ];

    case "delete":
      return state.filter((todo) => todo.id !== action.id);

    case "finish":
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }
        return {
          ...todo,
          done: true,
        };
      });
  }
};

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [state, dispatch] = useReducer(todosReducer, todos);

  console.log(state);

  function addItem(newTodoName) {
    dispatch({ type: "add", newTodoName });
    setIsFormShown(false);
  }

  function deleteItem(id) {
    dispatch({ type: "delete", id });
  }

  function finishItem(id) {
    dispatch({ type: "finish", id });
  }

  const existingItems = state.filter((todo) => todo.done === false);

  return (
    <div className={css.container}>
      <header className={css.header}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>{getSubheading(existingItems.length)}</h2>
        </div>
        {!isFormShown && (
          <button onClick={() => setIsFormShown(true)} className={css.button}>
            +
          </button>
        )}
      </header>
      {isFormShown && (
        <Form onFormSubmit={(newTodoName) => addItem(newTodoName)} />
      )}
      <ul>
        {state.map(({ id, name, done }) => (
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
