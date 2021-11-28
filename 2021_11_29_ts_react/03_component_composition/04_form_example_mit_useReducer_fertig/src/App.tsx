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

type FormState = Record<string, string>;

type ClearFormAction = {
  type: "clearFormAction";
};

type UpdateFieldAction = {
  type: "updateFieldAction";
  name: string;
  value: string;
};

function formReducer(state: FormState, action: ClearFormAction | UpdateFieldAction): FormState {
  switch (action.type) {
    case "clearFormAction":
      return {};
    case "updateFieldAction":
      return {
        ...state,
        [action.name]: action.value
      };
  }
  throw new Error("Invalid Action!");
}

const initialState: FormState = {};

type FormProps = {
  children: React.ReactNode;
};

function Form({ children }: FormProps) {
  // const [formState, setFormState] = React.useState<Record<string, string>>({});
  const [formState, dispatch] = React.useReducer(formReducer, initialState);

  function onClearForm() {
    dispatch({
      type: "clearFormAction"
    });
  }

  function onFieldChange(fieldname: string, value: string) {
    dispatch({
      type: "updateFieldAction",
      name: fieldname,
      value: value
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

type InputProps = {
  name: string;
};

function Input({ name }: InputProps) {
  const { formState, onFieldChange } = useFormContext();
  return (
    <label>
      {name}
      <input
        type="text"
        value={formState[name] || ""}
        onChange={e => onFieldChange(name, e.target.value)}
      />
    </label>
  );
}

function ClearButton() {
  const { onClearForm } = useFormContext();
  return <button onClick={onClearForm}>Clear</button>;
}

type FieldSetProps = {
  children: React.ReactNode;
};

function FieldSet({ children }: FieldSetProps) {
  return (
    <div>
      <p>FieldSet</p>
      {children}
    </div>
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

export default App;
