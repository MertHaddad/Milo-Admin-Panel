import React,{FC} from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../features/counterSlice";
import { selectName } from "../features/nameSlice";
const Home :FC = ()=>{
    const count = useSelector(selectCount);
    const name = useSelector(selectName);
    return (
        <>
        <div className="bg-success">
        <>
      <p>here we will see our value again!</p>
      <p className="text-danger">{count}</p>
      <p>Guess what!? Name just arrived!</p>
      <p>{name}</p>
    </>
        <p>homeeeeeeeee</p>
        </div>
        </>
    )

}

export default Home