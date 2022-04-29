import React, { useContext } from "react";
import { StateContext } from "../Context/context";

export default function Footer() {
  const { state } = useContext(StateContext);
  return (
    <div>
      <h1>Footer Component</h1>
      <p>{state.email}</p>
      <p>{state.password}</p>
    </div>
  );
}
