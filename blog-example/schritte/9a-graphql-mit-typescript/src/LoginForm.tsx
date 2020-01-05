import React from "react";

type LoginFormProps = {
  error?: string | null | undefined;
  onLogin(login: string, password: string): void;
};

export default function LoginForm({ error, onLogin }: LoginFormProps) {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  function clear() {
    setLogin("");
    setPassword("");
  }

  return (
    <div className="Container">
      <h1>Login</h1>

      <label>
        Username
        <input value={login} onChange={e => setLogin(e.currentTarget.value)} />
      </label>

      <label>
        Passwort
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
        />
      </label>

      {error && <p>{error}</p>}

      <button onClick={clear}>Clear</button>
      <button
        onClick={() => {
          onLogin(login, password);
        }}
      >
        Save Post
      </button>
    </div>
  );
}
