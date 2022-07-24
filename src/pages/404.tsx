import { Seo } from "../components/Seo";
import { Layout } from "../features/layout/Layout";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h2>NOT FOUND</h2>
    <p>You just hit a route that doesn&apos;t exist...</p>
  </Layout>
);

export default NotFoundPage;
