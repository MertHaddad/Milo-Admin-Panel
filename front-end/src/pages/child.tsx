import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCount } from "../features/counterSlice";
import { selectName } from "../features/nameSlice";

const Child: FC = () => {
  const count = useSelector(selectCount);
  const name = useSelector(selectName);
  return (
    <>
      <div className="bg-dark">
        <>
          <p>here we will see our value again!</p>
          <p className="text-danger">{count}</p>
          <p>Guess what!? Name just arrived!</p>
          <p>{name}</p>
        </>
        <p>page page</p>
      </div>
    </>
  );
};

export default Child;
