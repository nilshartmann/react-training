import React from "react";

export default function useApi<T>(url: string, initialValue: T) {
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
  }, [url]);

  // use 'as const' to make sure the array is interpreted as a 'tuple', not as a regular 'array'
  // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions
  return [data, setData, isLoading] as const;
}
