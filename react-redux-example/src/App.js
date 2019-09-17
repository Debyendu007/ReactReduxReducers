import React from 'react';
import './App.css';

import {useSelector, useDispatch} from "react-redux";

import {increment, decrement} from "./actions";

function App() {
  const counter = useSelector(state => state.counterReducer);
  const loginStatus = useSelector(state => state.loggedReducer);

  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h2>Hello Dibyendu</h2>
      <h3>
        Your Count : 
        {counter}
      </h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <h2>
        {loginStatus ? "you are logged in" : "you are logged out"}
      </h2>
    </div>
  );
}

export default App;
