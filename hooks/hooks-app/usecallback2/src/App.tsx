import React, { useState, useCallback } from "react";
import "./App.css";
import Title from "./components/Title";
import SubTitle from "./components/SubTitle";
import Counter from "./components/Counter";
import Button from "./components/Button";

function App() {
  const [countA, setCountA] = useState<number>(0);
  const [countB, setCountB] = useState<number>(0);

  // App.tsxがレンダリングされた際、新しい関数インスタンスが生成されるのでReact.memoでは異なる関数と認識されてボタンA押下時にボタンBもレンダリングされる
  // (異なるprops(handleCountA)を渡されていると認識される)
  // useCallbackを使用することで同じインスタンスであると認識される
  const handleCountA = useCallback(() => {
    console.log("aaaaa");
    // prevXxxxを使用することでButtonの再レンダリングも抑制できる
    setCountA((prevCount) => prevCount + 1);
  }, []);
  const handleCountB = useCallback(() => {
    console.log("bbbbb");
    setCountB((prevCount) => prevCount + 1);
  }, []);
  console.log("----------");
  return (
    <div className="App">
      <Title titleText={"useCalllback"} />
      <SubTitle titleText={"アンケート：A派 or B派?"} />
      <Counter counterTitle={"A派"} count={countA} />
      <Button buttonText={"A派"} onClick={handleCountA} />
      <p>----</p>
      <Counter counterTitle={"B派"} count={countB} />
      <Button buttonText={"B派"} onClick={handleCountB} />
    </div>
  );
}

export default App;
