import {incrementFn,decrementFn,AddByFn} from '../store/counter/counterslice';
import React from "react";
import {useSelector, useDispatch } from "react-redux";

function CounterApp() {

   const count=useSelector((state=>state.counter.counter));
   const dispatch=useDispatch();
  const incrementFun=()=>
  {
 dispatch(incrementFn());
  }
 const decrementFun=()=>
 {
   dispatch(decrementFn());
 }
 const addBy=()=>
 {
   dispatch(AddByFn(10));
 }
  return (
    <div className="App">
      <h1><center>React Redux ToolKit Counter App Example</center></h1>
       <h1>Count:{count}</h1>
      <button onClick={incrementFun}>Increment</button>
      <button onClick={decrementFun}>Decrement</button>
      <button onClick={addBy}>Add 10</button> 
    </div>
  );
}

export default CounterApp;