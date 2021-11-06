import React from "react";

type Props = {
  titleText: string;
};

const SubTitle: React.VFC<Props> = React.memo(({ titleText }) => {
  console.log("SubTitle");
  return <h3>{titleText}</h3>;
});

export default SubTitle;
