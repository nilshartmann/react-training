import React from "react";

export default function CustomHookApp() {
  const [phrase, setPhrase] = React.useState("");
  const { loading, result } = useDataLoader(`http://google.com?search=${phrase}`, "");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPhrase(e.target.value);
  }

  return (
    <div>
      <h1>Search...</h1>
      <label>
        Search for
        <input type="text" value={phrase} onChange={handleInputChange} />
      </label>
      {loading && <h2>Search is running...</h2>}
      {loading || <p>Your result: {result}</p>}
    </div>
  );
}

type UseDataLoaderResult<T> = {
  loading?: boolean;
  result: T;
};

function useDataLoader<T>(url: string, defaultData: T): UseDataLoaderResult<T> {
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<T>(defaultData);

  React.useEffect(() => {
    let cancelled = false;
    async function search() {
      setLoading(true);
      const searchResult = await executeApiCall(url);
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
  }, [url]);

  return {
    loading,
    result
  };
}

/** Simulates fetch API */
let requestNo = 0;
function executeApiCall(url: string): Promise<any> {
  if (!url) {
    return Promise.resolve("");
  }
  const myRequest = requestNo++;
  return new Promise(resolve => {
    const duration = url.endsWith("a") ? 1000 : 500;
    setTimeout(() => resolve(`I'm result of request to ${url} ${myRequest}`), duration);
  });
}
