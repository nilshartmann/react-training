export function navigateTo(location: string) {
  return {
    type: "HISTORY_PUSH",
    location,
  } as const;
}

export type NavigateAction = ReturnType<typeof navigateTo>;
