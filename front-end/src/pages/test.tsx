import React,{FC} from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../features/counterSlice";
import { selectData } from "../features/dataSlice";
const Test :FC = ()=>{
    const count = useSelector(selectCount);
    const data = useSelector(selectData);
    return (
        <>
        <div className="bg-danger">
        <>
      <p>here we will see our value again!</p>
      <p className="text-danger">{count}</p>
      <p>Guess what!? Name just arrived!</p>
      <p>{data}</p>
    </>
        <p>test test test</p>
        </div>
        </>
    )

}

export default Test