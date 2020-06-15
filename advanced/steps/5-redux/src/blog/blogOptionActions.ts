// ====================================================================
//  BlogListOptions
// ====================================================================
export function setBlogListSort(sortBy: "date" | "likes", direction: "asc" | "desc") {
  return {
    type: "SET_BLOGLIST_SORT",
    sortBy,
    direction,
  } as const;
}
export type SetBlogListSortAction = ReturnType<typeof setBlogListSort>;

export function setFilterByLikes(likes: number) {
  return {
    type: "SET_BLOGLIST_FILTER_BY_LIKES",
    likes,
  } as const;
}

export type SetFilterByLikesAction = ReturnType<typeof setFilterByLikes>;
