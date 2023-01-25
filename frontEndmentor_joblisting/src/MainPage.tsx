import { Layout } from "./components/Layout";
import { Header } from "./components/header";
import { JobList } from "./components/JobList";
export const MainPage: React.FC<{}> = ({}) => {
  return (
    <Layout>
      <Header />
      <JobList />
    </Layout>
  );
};
