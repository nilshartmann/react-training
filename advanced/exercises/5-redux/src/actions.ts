// todo:
//
//  - implement two action creators: the updateBlogTitle and updateBlogBody.
//  - they should receive the new title resp. body as string
//  - the action should have a type (choose a name yourself) and the new title/body as its payload
export function updateBlogTitle() {
  return {} as const; // 'as const' here for simplified typescript typing
}

export function updateBlogBody() {
  return {} as const; // 'as const' here for simplified typescript typing
}

export type UpdateBlogBodyAction = ReturnType<typeof updateBlogBody>;
export type UpdateBlogTitleAction = ReturnType<typeof updateBlogTitle>;
