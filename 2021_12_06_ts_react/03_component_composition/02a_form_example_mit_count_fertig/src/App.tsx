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
      <Dummy />
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
  let count = inputCounter[name] || 0;
  inputCounter[name] = count + 1;
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

let clearButtonCount = 0;
function ClearButton() {
  clearButtonCount++;
  const { onClearForm } = useFormContext();
  return <button onClick={onClearForm}>Clear ({clearButtonCount})</button>;
}

type FieldSetProps = {
  children: React.ReactNode;
};

let fieldSetCount = 0;
function FieldSet({ children }: FieldSetProps) {
  console.log("FIELD SET", fieldSetCount);
  return (
    <div>
      <p>FieldSet {fieldSetCount++}</p>
      {children}
    </div>
  );
}

let footerCount = 0;
function Footer() {
  return <div>Footer {footerCount++}</div>;
}

type CounterProps = {
  children: React.ReactNode;
};
function Container({ children }: CounterProps) {
  const [a, setA] = React.useState(0);

  return (
    <>
      <button onClick={() => setA(a + 1)}>Increase {a}</button>
      <div style={{ border: "1px solid grey", padding: "0.5rem" }}>{children}</div>
    </>
  );
}

function App() {
  return (
    <div style={{ border: "1px solid grey", padding: "0.5rem" }}>
      <Form>
        <Container>
          <FieldSet>
            <Input name="firstname" />
            <Input name="lastname" />
          </FieldSet>
          <ClearButton />
          <Footer />
        </Container>
      </Form>
    </div>
  );
}

export default App;
