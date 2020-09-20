import React from "react";
import { useRenderCounter } from "./use-render-counter";

import { ThemeContext } from "./ThemeContext";

type TextInputProps = {
  label: string;
  value: string;
  onTextChange(newValue: string): void;
};
export function TextInput(props: TextInputProps) {
  useRenderCounter(props.label);

  const { inputBackground } = React.useContext(ThemeContext);

  return (
    <label>
      {props.label}
      <input
        style={{ background: inputBackground }}
        value={props.value}
        onChange={e => props.onTextChange(e.target.value)}
      />
    </label>
  );
}

type PasswordInputProps = {
  password: string;
  onPasswordChange(newPassword: string): void;
};
export function PasswordInput(props: PasswordInputProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <label>
      Password
      <input
        type={showPassword ? "text" : "password"}
        value={props.password}
        onChange={e => props.onPasswordChange(e.target.value)}
      />
      <label>
        <input type="checkbox" onClick={() => setShowPassword(!showPassword)} />
        {showPassword ? "Hide Password" : "Show Password"}
      </label>
    </label>
  );
}

type IconButtonProps = {
  onClick(): void;
  icon: React.ReactNode;
};

export function IconButton(props: IconButtonProps) {
  return (
    <button className="icon-button" onClick={props.onClick}>
      <TrashIcon />
    </button>
  );
}

export function TrashIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path
        fillRule="evenodd"
        d="M16 1.75V3h5.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75zm-6.5 0a.25.25 0 01.25-.25h4.5a.25.25 0 01.25.25V3h-5V1.75z"
      ></path>
      <path d="M4.997 6.178a.75.75 0 10-1.493.144L4.916 20.92a1.75 1.75 0 001.742 1.58h10.684a1.75 1.75 0 001.742-1.581l1.413-14.597a.75.75 0 00-1.494-.144l-1.412 14.596a.25.25 0 01-.249.226H6.658a.25.25 0 01-.249-.226L4.997 6.178z"></path>
      <path d="M9.206 7.501a.75.75 0 01.793.705l.5 8.5A.75.75 0 119 16.794l-.5-8.5a.75.75 0 01.705-.793zm6.293.793A.75.75 0 1014 8.206l-.5 8.5a.75.75 0 001.498.088l.5-8.5z"></path>
    </svg>
  );
}
