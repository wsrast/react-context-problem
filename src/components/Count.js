import React, { useContext } from "react";
import { AppContext } from "../contexts/app-context";

function Count() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div>
      <h3>Current count from context: {state.count}</h3>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
    </div>
  );
}

export default Count;
