export function mockUser() {
  return {
    id: "user1",
    fullName: "Klaus Mueller",
    password: "Secret",
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
