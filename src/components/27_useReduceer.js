import React, { useReducer } from "react";

const intialState = 5;
const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "decrement") {
    return state - 1;
  }
  return state;
};

const useReduce = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <h1>27_Usereducer</h1>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INC</button>
      <button onClick={() => dispatch({ type: "decrement" })}>DEC</button>
    </div>
  );
};

export default useReduce;
