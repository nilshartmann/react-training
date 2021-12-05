import React from "react";
import { unchangedTextChangeRange } from "typescript";

type IFormContext = {
  formState: Record<string, string>;
  onClearForm(): void;
  onFieldChange(fieldname: string, value: string): void;
};

const defaultFormContext: IFormContext = {
  formState: {},
  onClearForm() {},
  onFieldChange() {}
};

type FormProps = {
  children: React.ReactNode;
};

function Form({ children }: FormProps) {
  const [formState, setFormState] = React.useState<Record<string, string>>({});

  function onClearForm() {
    setFormState({});
  }

  function onFieldChange(fieldname: string, value: string) {
    setFormState({
      ...formState,
      [fieldname]: value
    });
  }

  return <div>{children}</div>;
}

type InputProps = {
  name: string;
};

function Input({ name }: InputProps) {
  const value = "";
  const onChange = () => {};

  return (
    <label>
      {name}
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}

function App() {
  return (
    <div style={{ border: "1px solid grey", padding: "0.5rem" }}>
      <Form>
        <FieldSet>
          <Input name="firstname" />
          <Input name="lastname" />
        </FieldSet>
        <ClearButton />
      </Form>
    </div>
  );
}

type FieldSetProps = {
  children: React.ReactNode;
};

function FieldSet({ children }: FieldSetProps) {
  return <div>{children}</div>;
}

function ClearButton() {
  return <button>Clear</button>;
}

export default App;
