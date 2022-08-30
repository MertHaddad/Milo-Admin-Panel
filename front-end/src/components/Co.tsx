import React from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../features/counterSlice";
import { selectName } from "../features/nameSlice";

const Co = () => {
  const count = useSelector(selectCount);
  const name = useSelector(selectName);

  return (
    <>
      <p>here we will see our value again!</p>
      <p className="text-danger">{count}</p>
      <p>Guess what!? Name just arrived!</p>
      <p>{name}</p>
    </>
  );
};

export default Co;
