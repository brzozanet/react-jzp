import { Outlet, useNavigation } from "react-router-dom";
import { FoldersList } from "./components/FoldersList/FoldersList";
import { Layout } from "./components/Layout/Layout";
import { Loader } from "./components/Loader/Loader";

export function App() {
  const navigation = useNavigation();

  return (
    <>
      <Layout>
        {(navigation.state === "loading" ||
          navigation.state === "submitting") && <Loader />}
        <FoldersList />
        <Outlet />
      </Layout>
    </>
  );
}
