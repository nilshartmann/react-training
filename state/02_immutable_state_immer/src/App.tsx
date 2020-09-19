import React from "react";
import { v4 as uuid } from "uuid";
import { IconButton, TextInput, TrashIcon } from "./Components";
import { mockUser } from "./mocks/empty-user";
import { IUserData } from "./types";

function App() {
  const [user, setUser] = React.useState<IUserData>(() => mockUser());

  function handleFirstNameChange(newFirstName: string) {
    const newUser = { ...user, firstName: newFirstName };
    setUser(newUser);
  }

  function handleLastNameChange(newLastName: string) {
    const newUser = { ...user, lastName: newLastName };
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
      <TextInput label="First name" value={user.firstName} onTextChange={handleFirstNameChange} />
      <TextInput label="Last name" value={user.lastName} onTextChange={handleLastNameChange} />

      <div>
        {user.contacts.map(contact => (
          <div key={contact.id} className="f-horizontal">
            <TextInput
              label="Type"
              value={contact.type}
              onTextChange={type => handleContactTypeChange(contact.id, type)}
            />
            <TextInput
              label="Value"
              value={contact.value}
              onTextChange={value => handleContactValueChange(contact.id, value)}
            />
            <IconButton onClick={() => handleContactRemove(contact.id)} icon={<TrashIcon />} />
          </div>
        ))}
        <button onClick={handleContactAdd}>Add Contact</button>
      </div>
    </div>
  );
}

export default App;
