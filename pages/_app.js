import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "font-awesome/css/font-awesome.min.css";
import SideNavbar from "../components/Dashboard/SideNavbar";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
