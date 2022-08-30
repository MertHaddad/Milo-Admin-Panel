import React from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "../features/counterSlice";
import{first,second,third,selectName} from "../features/nameSlice"
import{f,s,t,selectData} from "../features/dataSlice"
import Navbar from "../components/navbar";
import Co from "./../components/Co";
import { Outlet } from "react-router-dom";
//import './App.css';

const App: React.FC = () => {
  const count = useAppSelector(selectCount);
  const name = useAppSelector(selectName)
  const data = useAppSelector(selectData)
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      
      <header data-testid="header" className="App-header">
      <Co/>
        <span>the value is : {count}</span>
        <button className="btn btn-primary" onClick={() => dispatch(decrement())}>
          remove one
        </button>
        <button className="btn btn-secondary" onClick={() => dispatch(increment())}>
          add one
        </button>
      <div className="row">
        <span>{name}</span>
        <button onClick={()=>dispatch(first())}>1</button>
        <button onClick={()=>dispatch(second())}>2</button>
        <button onClick={()=>dispatch(third())}>3</button>
      </div>
      <div className="row">
        <span onClick={()=>dispatch(f(String((Math.random()*10).toFixed(2))))} >Click on me to get you a random number : {data}</span>

      </div>
      <Outlet/>
      </header>
    </div>
  );
};

export default App;
