import React from "react";
import { v4 as uuid } from "uuid";
import { IconButton, TextInput, TrashIcon } from "./Components";
import { mockUser } from "./mocks/empty-user";
import { IUserData } from "./types";

function App() {
  const [user, setUser] = React.useState<IUserData>(() => mockUser());

  function handleFullNameChange(newFullName: string) {
    const newUser = { ...user, fullName: newFullName };
    setUser(newUser);
  }

  function handlePasswordChange(newPassword: string) {
    const newUser = { ...user, password: newPassword };
    setUser(newUser);
  }

  function handleContactRemove(contactId: string) {
    const newUser = {
      ...user,
      contacts: user.contacts.filter(c => c.id !== contactId)
    };
    setUser(newUser);
  }

  function handleContactTypeChange(contactId: string, newType: string) {
    const newUser = {
      ...user,
      contacts: user.contacts.map(oldContact =>
        oldContact.id === contactId ? { ...oldContact, type: newType } : oldContact
      )
    };
    setUser(newUser);
  }

  function handleContactValueChange(contactId: string, newValue: string) {
    const newUser = {
      ...user,
      contacts: user.contacts.map(oldContact =>
        oldContact.id === contactId ? { ...oldContact, value: newValue } : oldContact
      )
    };
    setUser(newUser);
  }

  function handleContactAdd() {
    const newUser = {
      ...user!,
      contacts: [...user.contacts, { id: uuid(), type: "", value: "" }]
    };
    setUser(newUser);
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
