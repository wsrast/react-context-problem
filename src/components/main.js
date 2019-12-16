import React, { useContext } from "react";
import AppProvider, { AppContext } from "../contexts/app-context";
import Message from "./Message";
import Count from "./Count";

const Main = () => {
  return (
    <div>
      Returning!
      <AppProvider>
        <h2>
          Re-renders!{" "}
          <span role="img" aria-label="sad face">
            😩
          </span>
        </h2>
        <Message />
        <Message />
        <Message />
        <Count />
      </AppProvider>
    </div>
  );
};

export default Main;
