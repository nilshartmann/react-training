import React from "react";

export default function App() {
  const [phrase, setPhrase] = React.useState("XXX");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPhrase(e.target.value);
  }

  return (
    <div>
      <h1>Search...</h1>

      <input value={phrase} onChange={handleInputChange} />
      <Search searchString={phrase} />
    </div>
  );
}

type SearchProps = {
  searchString: string;
};

function Search({ searchString }: SearchProps) {
  // TODO: Lege einen Custom Hook an, der sich um das Laden der Daten kümmert
  //         -> welche Parameter bekommt der Hook?
  //         -> was liefert der Hook zurück?

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
    const duration = searchString.endsWith("a") ? 1000 : 500;
    setTimeout(
      () => resolve(`I found ${searchString} from Hook in request ${myRequest}`),
      duration
    );
  });
}
