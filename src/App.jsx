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
      return {
        isFormShown: false,
        todos: [
          ...state.todos,
          {
            name: action.newTodoName,
            done: false,
            id: nanoid(),
          },
        ],
      };

    case "delete":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };

    case "finish":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.id) {
            return todo;
          }
          return {
            ...todo,
            done: true,
          };
        }),
      };

    case "toggle":
      return {
        ...state,
        isFormShown: true,
      };
  }
};

function App() {
  const [state, dispatch] = useReducer(todosReducer, {
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
