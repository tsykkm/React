import { useState, useEffect } from "react";
import Layout from "../../components/templates/Layout";
import firebase from "firebase/app";
import "../../components/fire";
console.log("aaa", firebase);
const db = firebase.firestore();

export default function Home() {
  const mydata: any = [];
  const [data, setData] = useState(mydata);
  const [message, setMessage] = useState("wait...");

  useEffect(() => {
    db.collection("mydata")
      .get()
      .then((snapshot: any) => {
        snapshot.forEach((document: any) => {
          const doc = document.data();
          mydata.push(
            <tr key={document.id}>
              <td>
                <a href={"/fire/del?id=" + document.id}>{document.id}</a>
              </td>
              <td>{doc.name}</td>
              <td>{doc.mail}</td>
              <td>{doc.age}</td>
            </tr>
          );
        });
        setData(mydata);
        setMessage("Firebase data.");
      });
  }, []);

  return (
    <div>
      <Layout>
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">{message}</h5>
          <table className="table bg-white text-left">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Mail</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>{data}</tbody>
          </table>
        </div>
      </Layout>
    </div>
  );
}
