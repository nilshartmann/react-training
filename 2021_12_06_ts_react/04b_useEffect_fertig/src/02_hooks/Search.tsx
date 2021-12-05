import * as React from "react";

type SearchProps = {
  searchString: string;
};

export default function Search({ searchString }: SearchProps) {
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<string | undefined>();

  React.useEffect(() => {
    let cancelled = false;
    async function search() {
      setLoading(true);
      const searchResult = await executeSearchApiCall(searchString);
      if (cancelled) {
        console.log("already cancelled");
        return;
      }
      setLoading(false);
      setResult(searchResult);
    }

    search();

    return () => {
      cancelled = true;
    };
  }, [searchString]);

  if (loading) {
    return <h2>Searching...</h2>;
  }

  if (!result) {
    return null;
  }

  return (
    <div>
      <h2>Search Result:</h2>
      <p>{result}</p>
    </div>
  );
}

let requestNo = 0;
function executeSearchApiCall(searchString: string): Promise<string> {
  if (!searchString) {
    return Promise.resolve("");
  }
  const myRequest = requestNo++;
  return new Promise(resolve => {
    const duration = searchString.startsWith("a") ? 2000 : 500;
    setTimeout(
      () => resolve(`I found ${searchString} from Hook in request ${myRequest}`),
      duration
    );
  });
}
