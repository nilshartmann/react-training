import { makeAutoObservable } from "mobx";
import React, { useContext } from "react";

class BlogStore {
  title: string = "Initial Title";
  body: string = "Initial Body";
  constructor() {
    makeAutoObservable(this);
  }

  updateTitle(title: string) {
    this.title = title;
  }

  updateBody(body: string) {
    this.body = body;
  }

  get titleLength() {
    console.log("titleLength called");
    return this.title.length;
  }
}

const blogStore = new BlogStore();

type IStoreContext = {
  blogStore: BlogStore;
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
