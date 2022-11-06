import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div className='container'>
    <Layout>
      <Component {...pageProps} />
      <h3>hello SUP hello SUP hello SUP hello SUP hello SUP hello SUP </h3>

    </Layout>
    </div>
  );
}

export default MyApp;
