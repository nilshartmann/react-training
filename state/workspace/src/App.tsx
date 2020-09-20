import React from "react";
import { IconButton, TrashIcon } from "./Components";
import { mockUser } from "./mocks/empty-user";
import { IUserData } from "./types";

export default function App() {
  const [user, setUser] = React.useState<IUserData>(() => mockUser());

  function handleFullNameChange(newFullName: string) {}

  function handlePasswordChange(newPassword: string) {}

  function handleContactRemove(contactId: string) {}

  function handleContactTypeChange(contactId: string, newType: string) {}

  function handleContactValueChange(contactId: string, newValue: string) {}

  function handleContactAdd() {}

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
