import React, { useContext } from "react";
import { AppContext } from "../contexts/app-context";

function Message() {
  const {
    state: { message }
  } = useContext(AppContext);
  // the text will render to a random color for
  // each instance of the Message component
  const getColor = () => Math.floor(Math.random() * 255);
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`
  };
  return (
    <div>
      <h4 style={style}>{message}</h4>
    </div>
  );
}

export default Message;
