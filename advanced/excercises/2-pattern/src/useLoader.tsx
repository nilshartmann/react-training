import React from "react";
import { demoFetch } from "./api";

type LoadingResult = { loading: true };
type DataResult<T> = { data: T; loading: false };

export default function useLoader<T>(url: string): LoadingResult | DataResult<T> {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    demoFetch(url)
      .then(response => response.json())
      .then(json => {
        setLoading(false);
        setData(json);
      })
      .catch(err => console.error("Loading data failed: " + err));
  }, [url]);

  if (loading || !data) {
    return { loading: true };
  }

  return {
    loading: false,
    data
  };
}
