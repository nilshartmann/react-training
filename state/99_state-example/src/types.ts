export type IContact = {
  id: string;
  type: string;
  value: string;
};

export type IUserData = {
  id: string;
  firstName: string;
  lastName: string;
  contacts: IContact[];
};
