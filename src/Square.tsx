import React from "react";

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

const Square: React.VFC<SquareProps> = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
