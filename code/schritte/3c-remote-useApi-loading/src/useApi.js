import React from "react";

export default function useApi(url, initialValue) {
  const [isLoading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(initialValue);

  React.useEffect(
    () => {
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
    },
    // Make sure, this Hook only runs (after initial) when URL changes
    [url]
  );

  return [data, setData, isLoading];
}
