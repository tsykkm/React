import { useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Layout from "../components/templates/Layout";
import Link from "next/link";
import useSWR from "swr";
// import InitialPage from "../components/organisms/InitialPage";

const Home: NextPage = () => {
  const [address, setAddress] = useState("/api/hello");
  const { data, err } = useSWR(address);
  console.log(data);
  const onChange = (e) => {
    console.log(e.target.value);
    setAddress("/api/hello/" + e.target.value);
  };

  return (
    <div className={styles.container}>
      <Layout>
        <main className={styles.main}>
          <h1>TOP PAGE</h1>
          <h5>{JSON.stringify(data)}</h5>
          <input type="number" className="form-control" onChange={onChange} />
        </main>
      </Layout>
    </div>
  );
};

export default Home;
