import React from "react";

type Props = {
  titleText: string;
};

// 返却値が一意に決まっているものは要memo化
const Title: React.VFC<Props> = React.memo(({ titleText }) => {
  console.log("Title");
  return <h2>{titleText}</h2>;
});

export default Title;
