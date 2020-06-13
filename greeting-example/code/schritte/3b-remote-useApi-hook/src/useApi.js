import React from "react";

export default function useApi(url, initialValue) {
  const [data, setData] = React.useState(initialValue);

  React.useEffect(
    () => {
      async function loadData() {
        try {
          const response = await fetch(url);
          const json = await response.json();
          setData(json);
        } catch (err) {
          console.error("LOADING DATA FAILED:", err);
          setData(null);
        }
      }
      loadData();
    },
    // Make sure, this Hook only runs (after initial) when URL changes
    [url]
  );

  return [data, setData];
}
