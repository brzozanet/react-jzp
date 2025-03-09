import { nanoid } from "nanoid";

export const appReducer = (state, action) => {
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
