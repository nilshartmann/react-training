import React from "react";

type FetchState<T> = {
  called: boolean;
  loading: boolean;
  error?: any;
  data?: T | null;
};

export default function useReadApi<T = any>(url: string, options?: RequestInit) {
  const [state, setState] = React.useState<FetchState<T>>({
    called: false,
    loading: true,
    data: null
  });

  React.useEffect(() => {
    async function loadData() {
      setState(oldState => ({
        called: oldState.called,
        loading: true,
        data: oldState.data
      }));
      try {
        const res = await fetch(url, options);
        const json = await res.json();

        if (res.status >= 200 && res.status < 300) {
          setState({
            called: true,
            loading: false,
            data: json
          });
        } else {
          setState({
            called: true,
            loading: false,
            error: json
          });
        }
      } catch (error) {
        console.error("Fetch failed", error);
        setState(oldState => ({
          called: true,
          loading: false,
          data: oldState.data,
          error: error
        }));
      }
    }
    loadData();
  }, [url, options]);

  return state;
}
