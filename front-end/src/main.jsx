import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "../src/App";
import { addNoteForm, NotesList } from "./components/NotesList/NotesList";
import { deleteNoteForm, editNoteForm, Note } from "./components/Note/Note";
import { addFolderForm } from "./components/FoldersList/FoldersList";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    action: addFolderForm,
    loader: () => {
      return fetch("http://localhost:3000/folders");
    },
    shouldRevalidate: ({ formAction }) => {
      if (formAction === "/") {
        return true;
      }
      return false;
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
            loader: ({ params }) => {
              return fetch(`http://localhost:3000/notes/${params.noteId}`);
            },
            shouldRevalidate: ({ formAction, currentParams }) => {
              if (
                !formAction ||
                formAction === `/notes/${currentParams.folderId}`
              ) {
                return true;
              }
              return false;
            },
            children: [
              {
                path: "/notes/:folderId/note/:noteId/delete",
                action: deleteNoteForm,
              },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
