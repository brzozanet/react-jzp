import { Outlet } from "react-router-dom";
import { FoldersList } from "./components/FoldersList/FoldersList";
import { Layout } from "./components/Layout/Layout";

export function App() {
  return (
    <Layout>
      <FoldersList />
    </Layout>
  );
}
