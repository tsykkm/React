import Layout from "../components/templates/Layout";
import styles from "../styles/Home.module.css";
import type { NextPage } from "next";
import Link from "next/link";

const Other: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <p>Other</p>
        <Link href=".">Back to top</Link>
      </Layout>
    </div>
  );
};

export default Other;
