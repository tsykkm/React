import React, { useState, useEffect } from "react";
import useSWR from "swr";

const Profile = (): any => {
  // 1. ローカルstateの作成
  const [profile, setProfile] = useState(null);
  // const [id, setId] = useState(1);
  const [loading, setLoading] = useState(true);

  // ---- useEffectのみを使った実装----
  // const fetchData = async () => {
  //   setLoading(true);

  //   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
  //   // TODO success/errorのハンドリングが必要
  //   const item = await res.json();
  //   // TODO 読み込み完了後にデータセット
  //   setProfile(item);

  //   setLoading(false);
  // };

  // // 初回render時とid変更時にfetch
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // swrを使うと簡潔に記述できる
  const fetcher = () => fetch(`https://jsonplaceholder.typicode.com/posts/1`);
  // 第一引数のキャッシュキーに対して、第二引数の関数オブジェクトの結果をキャッシュしてくれている
  const { data, error } = useSWR("cachekey/1", fetcher);
  if (error) return <div>failed to load</div>;

  if (!data) {
    return <h1>loading...</h1>;
  } else {
    return (
      <h1>
        <hr />
        {JSON.stringify(data)}
      </h1>
    );
  }
};

export default Profile;
