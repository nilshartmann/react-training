export type NewBlogPost = {
  title: string;
  body: string;
};

type Present<T> = T extends undefined ? never : T extends null ? never : T;
export function assertDataPresent<T>(data: T): asserts data is Present<T> {
  if (!data) {
    throw new Error("Data is not defined?!");
  }
}
