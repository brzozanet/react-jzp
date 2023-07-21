import Notes from "./components/notes-list/NotesList";
import FoldersList from "./components/folders-list/FoldersList";
import Layout from "./components/layout/Layout";
import Note from "./components/note/Note";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <Layout>
            <FoldersList />
            <Outlet />
        </Layout>
    );
}

export default App;
