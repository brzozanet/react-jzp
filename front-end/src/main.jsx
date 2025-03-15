import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "../src/App";
import { NotesList } from "./components/NotesList/NotesList";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    loader: () => {
      return fetch("http://localhost:3000/folders");
    },
    children: [
      {
        element: <NotesList />,
        path: "/notes/:folderId",
        loader: ({ params }) => {
          console.log(params);
          return fetch(
            `http://localhost:3000/notes?folderId=${params.folderId}`
          );
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
