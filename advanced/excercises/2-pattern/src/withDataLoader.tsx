import React from "react";
import { demoFetch } from "./api";
import LoadingIndicator from "./LoadingIndicator";

// almost no type checking 😱
export default function withDataLoader<T>(propName: string, Component: React.ComponentType<any>) {
  return function DataLoader(props: any) {
    const [data, setData] = React.useState<T | null>(null);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
      setLoading(true);
      demoFetch(props.url)
        .then(response => response.json())
        .then(json => {
          setLoading(false);
          setData(json);
        })
        .catch(err => console.error("Loading data failed: " + err));
    }, [props.url]);

    if (loading || !data) {
      // could also make sense to modify this...
      return <LoadingIndicator>Data is loading. Please wait.</LoadingIndicator>;
    }

    const allProps = {
      ...props,
      [propName]: data
    };

    return <Component {...allProps} />;
  };
}
