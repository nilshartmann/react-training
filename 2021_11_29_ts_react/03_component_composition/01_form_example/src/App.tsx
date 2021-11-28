import React, { useContext } from "react";

type IFormContext = {
  formState: Record<string, string>;
  onClearForm(): void;
  onFieldChange(fieldname: string, value: string): void;
};

const FormContext = React.createContext<IFormContext>({
  formState: {},
  onClearForm() {},
  onFieldChange() {}
});

function useFormContext() {
  return useContext(FormContext);
}

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

  return (
    <FormContext.Provider
      value={{
        formState,
        onClearForm,
        onFieldChange
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

let dummyCount = 0;
function Dummy() {
  console.log("Rendering Dummy", ++dummyCount);

  return <p>Dummy Renderings: {dummyCount}</p>;
}

type InputProps = {
  name: string;
};

let inputCounter: Record<string, number> = {};

function Input({ name }: InputProps) {
  // let count = inputCounter[name] || 0;
  // inputCounter[name] = count + 1;
  const { formState, onFieldChange } = useFormContext();
  return (
    <label>
      {name}
      <input
        type="text"
        value={formState[name] || ""}
        onChange={e => onFieldChange(name, e.target.value)}
      />
      (Renderings {inputCounter[name]})
    </label>
  );
}

// Hinzufügen:
//  1. Dummy in Form
//  2. FieldSet und Footer
//  3. ClearButton hinzufügen => was passiert bei onClick?
//  3. Container (mit State!) um FieldSet
//     -> klicken: was passiert
//  4. useState in App -> was passiert

function App() {
  return (
    <div style={{ border: "1px solid grey", padding: "0.5rem" }}>
      <Form>
        <Input name="firstname" />
        <Input name="lastname" />
      </Form>
    </div>
  );
}

type FieldSetProps = {
  children: React.ReactNode;
};

let fieldSetCount = 0;
function FieldSet({ children }: FieldSetProps) {
  console.log("FIELD SET", fieldSetCount);
  return (
    <div>
      {/* <p>FieldSet {fieldSetCount++}</p> */}
      {children}
    </div>
  );
}

let footerCount = 0;
function Footer() {
  return <div>Footer {footerCount++}</div>;
}

let clearButtonCount = 0;
function ClearButton() {
  clearButtonCount++;
  const { onClearForm } = useFormContext();
  return <button onClick={onClearForm}>Clear ({clearButtonCount})</button>;
}

type ContainerProps = {
  children: React.ReactNode;
};
function Container({ children }: ContainerProps) {
  const [a, setA] = React.useState(0);

  return (
    <>
      <button onClick={() => setA(a + 1)}>Increase {a}</button>
      <div style={{ border: "1px solid grey", padding: "0.5rem" }}>{children}</div>
    </>
  );
}

export default App;
