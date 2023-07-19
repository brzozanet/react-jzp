import Notes from "./components/Notes/Notes";
import Folders from "./components/folders/Folders";
import Layout from "./components/layout/Layout";
import Note from "./components/note/Note";

function App() {
    return (
        <Layout>
            <Folders />
            <Notes selectedFolder="Listy"></Notes>
            <Note></Note>
        </Layout>
    );
}

export default App;
