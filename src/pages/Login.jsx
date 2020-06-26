import React, { useState } from "react";
import {actions} from "./../store";

export default function LoginPage({ history }) {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    actions.loginUser(login, password)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
