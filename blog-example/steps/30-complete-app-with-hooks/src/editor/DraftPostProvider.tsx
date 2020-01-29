import React from "react";

type DraftPostContext = {
  draftTitle: string;
  draftBody: string;

  setDraftTitle(newTitle: string): void;
  setDraftBody(newBody: string): void;
  hasDraft: boolean;
  clearDraft(): void;
};

const DraftPostContext = React.createContext<DraftPostContext>({
  draftTitle: "",
  draftBody: "",
  hasDraft: false,
  setDraftBody: function() {},
  setDraftTitle: function() {},
  clearDraft: function() {}
});

type DraftPostProviderProps = {
  children: React.ReactNode;
};

export default function DraftPostProvider(props: DraftPostProviderProps) {
  const [draftTitle, setDraftTitle] = React.useState("");
  const [draftBody, setDraftBody] = React.useState("");

  const clearDraft = React.useCallback(() => {
    setDraftTitle("");
    setDraftBody("");
  }, [setDraftBody, setDraftTitle]);

  const value = React.useMemo(
    () => ({
      draftTitle,
      draftBody,
      setDraftTitle,
      setDraftBody,
      clearDraft,
      hasDraft: draftTitle !== "" || draftBody !== ""
    }),
    [draftTitle, draftBody, setDraftTitle, setDraftBody, clearDraft]
  );

  return <DraftPostContext.Provider value={value}>{props.children}</DraftPostContext.Provider>;
}

export function useDraftPost() {
  const draftPostContext = React.useContext(DraftPostContext);

  return draftPostContext;
}
