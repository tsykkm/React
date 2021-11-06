import React from "react";
import classes from "./Counter.module.scss";

type Props = {
  buttonText: string;
  onClick: () => void;
};

// React.memoはpropsの前後の値の変更を比較してレンダリングを決定している
const Button: React.VFC<Props> = React.memo(({ buttonText, onClick }) => {
  console.log("btn", buttonText);
  return (
    <div className={classes.root}>
      <button onClick={onClick} type="button">
        {buttonText}
      </button>
    </div>
  );
});

export default Button;
