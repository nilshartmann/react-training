import React from "react";
import { v4 as uuid } from "uuid";
import { IconButton, TextInput, TrashIcon } from "./Components";
import { mockUser } from "./mocks/empty-user";
import { IContact, IUserData } from "./types";

function App() {
  const [user, setUser] = React.useState<IUserData>(mockUser());

  function handleFirstNameUpdate(newFirstName: string) {
    const newUser = { ...user!, firstName: newFirstName };
    setUser(newUser);
  }

  function handleLastNameUpdate(newLastName: string) {
    const newUser = { ...user!, lastName: newLastName };
    setUser(newUser);
  }

  function handleContactRemove(contactId: string) {
    const newUser = {
      ...user!,
      contacts: user!.contacts.filter(c => c.id !== contactId)
    };
    setUser(newUser);
  }

  function handleContactTypeUpdate(contactId: string, newType: string) {
    const newUser = {
      ...user!,
      contacts: user!.contacts.map(oldContact =>
        oldContact.id === contactId ? { ...oldContact, type: newType } : oldContact
      )
    };
    setUser(newUser);
  }

  function handleContactValueUpdate(contactId: string, newValue: string) {
    const newUser = {
      ...user!,
      contacts: user!.contacts.map(oldContact =>
        oldContact.id === contactId ? { ...oldContact, value: newValue } : oldContact
      )
    };
    setUser(newUser);
  }

  function handleContactAdd() {
    const newUser = {
      ...user!,
      contacts: [...user!.contacts, { id: uuid(), type: "", value: "" }]
    };
    setUser(newUser);
  }

  return (
    <UserForm
      user={user}
      onFirstNameUpdate={handleFirstNameUpdate}
      onLastNameUpdate={handleLastNameUpdate}
      onContactRemove={handleContactRemove}
      onContactAdd={handleContactAdd}
      onContactTypeUpdate={handleContactTypeUpdate}
      onContactValueUpdate={handleContactValueUpdate}
    />
  );
}

type IUserFormProps = {
  user: IUserData;
  onFirstNameUpdate(newName: string): void;
  onLastNameUpdate(newName: string): void;
  onContactRemove(contactId: string): void;
  onContactAdd(): void;

  onContactTypeUpdate(contactId: string, newType: string): void;
  onContactValueUpdate(contactId: string, newValue: string): void;
};

function UserForm(props: IUserFormProps) {
  return (
    <div className="Container">
      <h1>Edit User Details</h1>
      <TextInput
        label="First name"
        value={props.user.firstName}
        onTextChange={props.onFirstNameUpdate}
      />
      <TextInput
        label="Last name"
        value={props.user.lastName}
        onTextChange={props.onLastNameUpdate}
      />

      <div>
        {props.user.contacts.map(contact => (
          <ContactEditor
            key={contact.id}
            contact={contact}
            onTypeChange={newType => props.onContactTypeUpdate(contact.id, newType)}
            onValueChange={newValue => props.onContactValueUpdate(contact.id, newValue)}
            onRemove={() => props.onContactRemove(contact.id)}
          />
        ))}
        <button onClick={props.onContactAdd}>Add Contact</button>
      </div>
    </div>
  );
}

type IContactEditorProps = {
  contact: IContact;
  onTypeChange(newType: string): void;
  onValueChange(newValue: string): void;
  onRemove(): void;
};

function ContactEditor(props: IContactEditorProps) {
  return (
    <div className="f-horizontal">
      <TextInput label="Type" value={props.contact.type} onTextChange={props.onTypeChange} />
      <TextInput label="Value" value={props.contact.value} onTextChange={props.onValueChange} />
      <IconButton onClick={props.onRemove} icon={<TrashIcon />} />
    </div>
  );
}

export default App;
