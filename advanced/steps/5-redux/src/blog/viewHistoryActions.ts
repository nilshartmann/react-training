export function postShown(postId: string) {
  return {
    type: "POST_SHOWN",
    payload: {
      postId,
    },
  } as const;
}

export type PostShownAction = ReturnType<typeof postShown>;
