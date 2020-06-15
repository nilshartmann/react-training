export function updateBlogTitle(title: string) {
  return {
    type: "UPDATE_BLOG_TITLE",
    newTitle: title
  } as const;
}

export type UpdateBlogTitleAction = ReturnType<typeof updateBlogTitle>;

export function updateBlogBody(body: string) {
  return {
    type: "UPDATE_BLOG_BODY",
    newBody: body
  } as const;
}

export type UpdateBlogBodyAction = ReturnType<typeof updateBlogBody>;
