import React from "react";

export default function App() {
  const [phrase, setPhrase] = React.useState("Susi");

  return (
    <div>
      <h1>Search...</h1>

      <label>
        Search for
        <input type="text" value={phrase} onChange={e => setPhrase(e.target.value)} />
      </label>
      <Search searchString={phrase} />
    </div>
  );
}

type SearchProps = {
  searchString: string;
  resultFormatter?: null | ((s: string) => string);
};

function Search({ searchString }: SearchProps) {
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<string | undefined>();

  React.useEffect(() => {
    async function search() {
      setLoading(true);

      const searchResult = await executeSearchApiCall(searchString);

      setResult(searchResult);
      setLoading(false);
    }

    search();
  }, [searchString]);

  if (!searchString) {
    return null;
  }

  return (
    <>
      {loading && <h2>Searching for {searchString}</h2>}

      {loading || (
        <div>
          <h2>Search Result for "{searchString}":</h2>
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
    const duration = searchString.endsWith("a") ? 2000 : 500;
    setTimeout(
      () => resolve(`I found ${searchString} from Hook in request ${myRequest}`),
      duration
    );
  });
}
