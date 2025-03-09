import { useReducer, useState } from "react";
import css from "./App.module.css";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { getSubheading } from "./utils/getSubheading";
import { todosDatabase } from "./database/todos";
import { nanoid } from "nanoid";

const todosReducer = (state, data) => {
  return state.filter((todo) => todo.id !== data);

  return state;
};

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  // const [, setTodos] = useState(todosDatabase);

  const [todos, dispatch] = useReducer(todosReducer, todosDatabase);

  function addItem(newTodoName) {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        name: newTodoName,
        done: false,
        id: nanoid(),
      },
    ]);
    setIsFormShown(false);
  }

  function deleteItem(id) {
    dispatch(id);
  }

  function finishItem(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }

        return {
          ...todo,
          done: true,
        };
      })
    );
  }

  return (
    <div className={css.container}>
      <header className={css.header}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>{getSubheading(todos.length)}</h2>
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
        {todos.map(({ id, name, done }) => (
          <TodoItem
            key={id}
            name={name}
            done={done}
            onDeleteButtonClick={() => deleteItem(id)}
            // onDeleteButtonClick={() => dispatch({ type: "delete" }, id)}
            onDoneButtonClick={() => finishItem(id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
