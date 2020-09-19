export function mockUser() {
  return {
    id: "user1",
    firstName: "Klaus",
    lastName: "Mueller",
    contacts: [
      {
        id: "contact-1",
        type: "phone",
        value: "0123/456789"
      },
      {
        id: "contact-2",
        type: "email",
        value: "klaus@example.com"
      }
    ]
  };
}
