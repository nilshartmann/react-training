import React from "react";
import { demoFetch } from "./api";

type DataLoaderRenderPropsProps<T> = {
  url: string;

  loadingStateComponent: React.ReactNode;

  // need also consideration: what type is data?
  children: (data: T) => React.ReactNode;
};

export default function DataLoaderRenderProps<T>({
  url,
  loadingStateComponent,
  children
}: DataLoaderRenderPropsProps<T>) {
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

  // wrap with React.Fragment, as typedef for React.ReactNode is buggy: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051#issuecomment-567690424
  if (loading || !data) {
    return <>{loadingStateComponent}</>;
  }

  // wrap with React.Fragment, as typedef for React.ReactNode is buggy: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051#issuecomment-567690424
  return <>{children(data)}</>;
}
