import React from "react";
import { slowUrl } from "./demo-helper";
import useAppSelector from "useAppSelector";

type FetchState<T> = {
  called: boolean;
  loading: boolean;
  error?: any;
  data?: T | null;
};
export default function useReadApi<T = any>(url: string) {
  const token = useAppSelector((state) => state.auth?.token);

  const [state, setState] = React.useState<FetchState<T>>({
    called: false,
    loading: true,
    data: null,
  });

  React.useEffect(() => {
    async function loadData() {
      setState((oldState) => ({
        called: oldState.called,
        loading: true,
        data: oldState.data,
      }));
      const options = token
        ? {
            headers: {
              Authorization: token,
            },
          }
        : undefined;
      try {
        const res = await fetch(slowUrl(url), options);
        const json = await res.json();

        if (res.status >= 200 && res.status < 300) {
          setState({
            called: true,
            loading: false,
            data: json,
          });
        } else {
          setState({
            called: true,
            loading: false,
            error: json,
          });
        }
      } catch (error) {
        console.error("Fetch failed", error);
        setState((oldState) => ({
          called: true,
          loading: false,
          data: oldState.data,
          error: error,
        }));
      }
    }
    loadData();
  }, [url, token]);

  return state;
}
