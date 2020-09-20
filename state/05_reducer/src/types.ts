export type IContact = {
  id: string;
  type: string;
  value: string;
};

export type IUserData = {
  id: string;
  fullName: string;
  password: string;
  contacts: IContact[];
};
