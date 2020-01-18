import React from "react";
import { useAuth } from "../AuthContext";

type FetchState<T> = {
  called: boolean;
  loading: boolean;
  error?: any;
  data?: T | null;
};

type WriteOptions = {
  method?: string;
};

export default function useWriteApi<T>(
  url: string,
  options: WriteOptions = {
    method: "POST"
  }
) {
  const { authState } = useAuth();
  const [state, setState] = React.useState<FetchState<T>>({
    loading: false,
    data: null,
    called: false
  });

  async function post(payload: any) {
    let newState: FetchState<T>;
    try {
      const headers: HeadersInit = {
        "Content-Type": "application/json"
      };
      if (authState) {
        headers["Authorization"] = authState.token;
      }

      setState(oldState => ({
        called: oldState.called,
        loading: true,
        data: oldState.data
      }));

      const res = await fetch(url, {
        method: options.method || "POST",
        headers,
        body: JSON.stringify(payload)
      });

      const json = await res.json();

      if (res.status >= 200 && res.status < 300) {
        newState = {
          called: true,
          loading: false,
          data: json
        };
      } else {
        newState = {
          called: true,
          loading: false,
          error: json
        };
      }
    } catch (error) {
      console.error("Fetch failed", error);
      newState = {
        called: true,
        loading: false,
        data: state.data,
        error: error
      };
    }
    setState(newState);
    return newState;
  }

  return [post, state] as const;
}
