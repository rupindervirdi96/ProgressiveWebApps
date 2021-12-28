import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Auth(props) {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    
    dispatch({
      type: "CHANGE_APP_NAME",
      payload: usernameInput,
    });

    navigate("/home");
  };

  return (
    <div>
      <form action="" onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          name="email"
          value={usernameInput}
          placeholder="username"
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={passwordInput}
          placeholder="password"
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Auth;
