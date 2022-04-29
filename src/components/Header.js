import React, { useContext, useState, useEffect } from "react";
import { addEmail, addPassword } from "../reducer/action";
import { StateContext } from "../Context/context";

function Header() {
  const { state, dispatch } = useContext(StateContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("Header");
  const addBtn = (e) => {
    e.preventDefault();
    dispatch(addEmail(email));
    dispatch(addPassword(password));
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div>
      <li>{state.email}</li>
      <li>{state.password}</li>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Emailni kiriting"
        type="text"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Parolingizni kiriting"
        type="password"
      />

      <button onClick={addBtn}>Sign in</button>
    </div>
  );
}
export default Header;
