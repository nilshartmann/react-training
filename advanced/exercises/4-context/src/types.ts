export type BlogPost = {
  id: string;
  title: string;
  body: string;
  date: string;
};

export type NewBlogPost = {
  title: string;
  body: string;
};

export type User = {
  id: string;
  login: string;
  name: string;
};
