import React from "react";

type UseApiResult<T> = [T, React.Dispatch<React.SetStateAction<T>>, boolean];

export default function useApi<T>(url: string, initialValue: T): UseApiResult<T> {
  const [isLoading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(initialValue);

  React.useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setData(initialValue);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error("LOADING DATA FAILED:", err);
        setData(initialValue);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [url]); // Make sure, this Hook only runs (after initial) when URL changes

  return [data, setData, isLoading];
}
