import produce, { Draft } from "immer";
import React from "react";
import { v4 as uuid } from "uuid";
import { IconButton, TextInput, TrashIcon } from "./Components";
import { mockUser } from "./mocks/empty-user";
import { IUserData } from "./types";

function App() {
  const [user, setUser] = React.useState<IUserData>(() => mockUser());

  function handleFullNameChange(newFullName: string) {
    setUser(
      produce(user, draft => {
        draft.fullName = newFullName;
      })
    );
  }

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
      <label>
        Full Name
        <input value={user.fullName} onChange={e => handleFullNameChange(e.target.value)} />
      </label>

      <label>
        Password
        <input value={user.password} onChange={e => handlePasswordChange(e.target.value)} />
      </label>

      <div>
        {user.contacts.map(contact => (
          <div key={contact.id} className="f-horizontal">
            <label>
              Type
              <input
                value={contact.type}
                onChange={e => handleContactTypeChange(contact.id, e.target.value)}
              />
            </label>
            <label>
              Value
              <input
                value={contact.value}
                onChange={e => handleContactValueChange(contact.id, e.target.value)}
              />
            </label>
            <IconButton onClick={() => handleContactRemove(contact.id)} icon={<TrashIcon />} />
          </div>
        ))}
        <button onClick={handleContactAdd}>Add Contact</button>
      </div>
    </div>
  );
}

export default App;
