import React from "react";

type LoginFormProps = {
  error?: string | null | undefined;
  onLogin(login: string, password: string): void;
};

export default function LoginForm({ error, onLogin }: LoginFormProps) {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="Container">
      <h1>Login</h1>
      <label>
        Username
        <input value={login} onChange={e => setLogin(e.currentTarget.value)} />
      </label>
      <p>(Valid logins: nils, susi, klaus, sua, lauren, olivia, cathy, maja)</p>
      <label>
        Passwort
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
        />
      </label>
      <p>(Use any non-empty string as password)</p>
      {error && <p>{error}</p>}
      <button
        onClick={() => {
          onLogin(login, password);
        }}
      >
        Login
      </button>
    </div>
  );
}
