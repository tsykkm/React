import { useState, useEffect } from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Layout from "../components/templates/Layout";
import Link from "next/link";

const Home: NextPage = () => {
  const url = "./data.json";
  const [data, setData] = useState({ message: "", data: [] });

  useEffect(() => {
    fetch(url)
      .then((res) => {
        console.log("res", res);
        // JSONオブジェクトで解決されるPromiseを返す
        const jsonRes = res.json();
        console.log("res.json", jsonRes);
        return jsonRes;
      })
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.tsx</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
          {/* 追加 */}
          <div className={styles.addContainer}>
            <p>Home Page</p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Mail</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {data.data.map((value: any, key) => (
                  <tr key={key}>
                    <th>{value.name}</th>
                    <td>{value.mail}</td>
                    <td>{value.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link href="./other">Other</Link>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Home;
