import React from "react";
import logo from "./logo.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "./features/counterSlice";
//import './App.css';

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header data-testid="header" className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Merth Admin Panel (MAP) starts here.</p>
        <span>the value is : {count}</span>
        <button className="btn" onClick={() => dispatch(decrement())}>
          remove one
        </button>
        <button className="btn" onClick={() => dispatch(increment())}>
          add one
        </button>
      </header>
    </div>
  );
}

export default App;
