import produce from "immer";
import React from "react";
import { v4 as uuid } from "uuid";
import { IconButton, PasswordInput, TextInput, TrashIcon } from "./Components";
import { mockUser } from "./mocks/empty-user";
import { IContact, IUserData } from "./types";
import { useRenderCounter } from "./use-render-counter";

function App() {
  const [user, setUser] = React.useState<IUserData>(() => mockUser());

  const handleFullNameChange = React.useCallback(function handleFullNameChange(
    newFullName: string
  ) {
    setUser(user =>
      produce(user, draft => {
        draft.fullName = newFullName;
      })
    );
  },
  []);

  function handlePasswordChange(newPassword: string) {
    setUser(
      produce(user, draft => {
        draft.password = newPassword;
      })
    );
  }

  function handleContactRemove(contactId: string) {
    // hier kein produce sinnvoll?
    const newUser = {
      ...user,
      contacts: user.contacts.filter(c => c.id !== contactId)
    };
    setUser(newUser);
  }

  function handleContactTypeChange(contactId: string, newType: string) {
    setUser(
      produce(user, draft => {
        const ix = draft.contacts.findIndex(contact => contact.id === contactId);
        draft.contacts[ix].type = newType;
      })
    );
  }

  function handleContactValueChange(contactId: string, newValue: string) {
    setUser(
      produce(user, draft => {
        const ix = draft.contacts.findIndex(contact => contact.id === contactId);
        draft.contacts[ix].value = newValue;
      })
    );
  }

  function handleContactAdd() {
    setUser(
      produce(user, draft => {
        draft.contacts.push({ id: uuid(), type: "", value: "" });
      })
    );
  }

  return (
    <div className="Container">
      <h1>Edit User Details</h1>
      <MemoTextInput label="Full Name" value={user.fullName} onTextChange={handleFullNameChange} />
      <PasswordInput password={user.password} onPasswordChange={handlePasswordChange} />

      <div>
        {user.contacts.map(contact => (
          <div key={contact.id} className="f-horizontal">
            <TextInput
              label="Type"
              value={contact.type}
              onTextChange={e => handleContactTypeChange(contact.id, e)}
            />
            <TextInput
              label="Value"
              value={contact.value}
              onTextChange={e => handleContactValueChange(contact.id, e)}
            />
            <IconButton onClick={() => handleContactRemove(contact.id)} icon={<TrashIcon />} />
          </div>
        ))}
        <InvalidContactCounter contacts={user.contacts} />
        <button onClick={handleContactAdd}>Add Contact</button>
      </div>
    </div>
  );
}

type InvalidContactCounterProps = {
  contacts: IContact[];
};
function XInvalidContactCounter(props: InvalidContactCounterProps) {
  useRenderCounter("InvalidContactCounter");
  const contactsWithProblems = props.contacts.filter(contact => contact.type === "").length;

  if (contactsWithProblems) {
    return <div>{contactsWithProblems} contacts are not valid</div>;
  }
  return <div>All contacts are valid</div>;
}
const InvalidContactCounter = React.memo(XInvalidContactCounter);

const MemoTextInput = React.memo(TextInput);

export default App;
