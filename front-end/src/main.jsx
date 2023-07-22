import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotesList from "./components/notes-list/NotesList";
import Note from "./components/note/Note";

const router = createBrowserRouter([
    {
        path: "/",
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
                element: <NotesList />,
                children: [
                    {
                        loader: ({ params }) => {
                            const noteId = params.noteId;
                            return fetch(
                                `http://localhost:3000/notes?folderId=${params.folderId}&id=${noteId}`
                            );
                        },
                        path: "note/:noteId",
                        element: <Note />,
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
