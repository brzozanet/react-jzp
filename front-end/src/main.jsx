import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotesList, { createNewNote } from "./components/notes-list/NotesList";
import Note, { updateNote } from "./components/note/Note";
import { createFolder } from "./components/folders-list/FoldersList";
import { deleteNote } from "./components/note/Note";

const router = createBrowserRouter([
    {
        path: "/",
        action: createFolder,
        loader: () => {
            return fetch("http://localhost:3000/folders");
        },
        element: <App />,
        children: [
            {
                path: "notes/:folderId",
                loader: ({ params }) => {
                    const folderId = params.folderId;
                    return fetch(
                        `http://localhost:3000/notes?folderId=${folderId}`
                    );
                },
                action: createNewNote,
                element: <NotesList />,
                children: [
                    {
                        loader: ({ params }) => {
                            const noteId = params.noteId;
                            return fetch(
                                `http://localhost:3000/notes?folderId=${params.folderId}&id=${noteId}`
                            );
                        },
                        action: updateNote,
                        path: "note/:noteId",
                        element: <Note />,
                        children: [
                            {
                                path: "delete",
                                action: deleteNote,
                            },
                        ],
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
