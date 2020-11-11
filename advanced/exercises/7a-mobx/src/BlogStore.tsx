import React, { useContext } from "react";

const blogStore = null;

type IStoreContext = {
  blogStore: any;
};

export const StoreContext = React.createContext<IStoreContext>(null!);

type StoreProviderProps = {
  children: React.ReactNode;
};

export function StoreProvider(props: StoreProviderProps) {
  return <StoreContext.Provider value={{ blogStore }}>{props.children}</StoreContext.Provider>;
}

export function useStore() {
  return useContext(StoreContext);
}
