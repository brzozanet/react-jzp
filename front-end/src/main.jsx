import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "../src/App";
import { addNoteForm, NotesList } from "./components/NotesList/NotesList";
import { editNoteForm, Note } from "./components/Note/Note";
import { addFolderForm } from "./components/FoldersList/FoldersList";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    action: addFolderForm,
    shouldRevalidate: ({ formAction }) => {
      if (formAction === "/") {
        return true;
      }
      return false;
    },
    loader: () => {
      return fetch("http://localhost:3000/folders");
    },
    children: [
      {
        element: <NotesList />,
        path: "/notes/:folderId",
        action: addNoteForm,
        loader: ({ params }) => {
          return fetch(
            `http://localhost:3000/notes?folderId=${params.folderId}`
          );
        },
        children: [
          {
            element: <Note />,
            path: "/notes/:folderId/note/:noteId",
            action: editNoteForm,
            shouldRevalidate: ({ formAction }) => {
              console.log(formAction);
              if (formAction) {
                return false;
              }
              return true;
            },
            loader: ({ params }) => {
              return fetch(`http://localhost:3000/notes/${params.noteId}`);
            },
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
