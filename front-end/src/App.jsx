import FoldersList from "./components/folders-list/FoldersList";
import Layout from "./components/layout/Layout";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./components/loader/Loader";

function App() {
    const navigation = useNavigation();

    return (
        <Layout>
            {(navigation.state === "submitting" ||
                navigation.state === "loading") && <Loader />}
            <FoldersList />
            <Outlet />
        </Layout>
    );
}

export default App;
