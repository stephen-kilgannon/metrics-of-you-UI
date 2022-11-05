import Nav from "./Nav";
import styles from "../styles/Layout.module.css";
import { Slideshow } from "../components/Slideshow";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <h3>SUP</h3>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
