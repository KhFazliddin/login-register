import React, { useContext, useState } from "react";
import { StateContext } from "../Context/context";

function Main() {
  const { state } = useContext(StateContext);

  return (
    <div>
      <h1>Main Component</h1>
      <p>{state.email}</p>
      <p>{state.password}</p>
    </div>
  );
}

export default Main;
