import * as React from "react";

type SearchProps = {
  searchString: string;
  resultFormatter?: null | ((s: string) => string);
};

export default function Search({ searchString, resultFormatter }: SearchProps) {
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
      if (resultFormatter) {
        const formattedResult = resultFormatter(searchResult);
        setResult(formattedResult);
      } else {
        setResult(searchResult);
      }
    }

    search();

    return () => {
      cancelled = true;
    };
  }, [searchString, resultFormatter]);

  if (!result) {
    return null;
  }

  return (
    <>
      {loading && <h2>Searching...</h2>}

      {loading || (
        <div>
          <h2>Search Result:</h2>
          <p>{result}</p>
        </div>
      )}
    </>
  );
}

let requestNo = 0;
function executeSearchApiCall(searchString: string): Promise<string> {
  if (!searchString) {
    return Promise.resolve("");
  }
  const myRequest = requestNo++;
  return new Promise(resolve => {
    const duration = searchString.endsWith("a") ? 1000 : 500;
    setTimeout(
      () => resolve(`I found ${searchString} from Hook in request ${myRequest}`),
      duration
    );
  });
}
