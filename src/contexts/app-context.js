import React, { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  count: 0,
  message: "Hello from Context (Reducer)!"
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
}

function AppProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const values = { state, dispatch };

  return <AppContext.Provider value={values} {...props} />;
}

export default AppProvider;
