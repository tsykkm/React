import React, { useState, useEffect } from "react";

const Profile = (): any => {
  // 1. ローカルstateの作成
  const [profile, setProfile] = useState(null);
  // const [id, setId] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
    // TODO success/errorのハンドリングが必要
    const item = await res.json();
    setProfile(item);

    setLoading(false);
  };

  // 初回render時とid変更時にfetch
  useEffect(() => {
    fetchData();
  }, []);

  if (profile == null) {
    return <h1>loading...</h1>;
  } else {
    return <h1>{JSON.stringify(profile)}</h1>;
  }
};

export default Profile;
