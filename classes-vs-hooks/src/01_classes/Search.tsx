import * as React from "react";

type SearchProps = {
  searchString: string;
};

type SearchState = {
  loading?: boolean;
  result?: string;
};

export default class Search extends React.Component<SearchProps, SearchState> {
  state: SearchState = {
    loading: false
  };

  componentMounted = true;

  async componentDidMount() {
    this.search();
  }

  async componentDidUpdate(prevProps: SearchProps) {
    if (this.props.searchString === prevProps.searchString) {
      // do not update if nothing changed
      return;
    }

    this.search();
  }

  async search() {
    if (!this.props.searchString) {
      return;
    }
    this.setState({
      loading: true
    });
    const result = await executeSearchApiCall(this.props.searchString);
    if (!this.componentMounted) {
      console.log("Compontent already unmounted!");
      return;
    }
    this.setState({
      result,
      loading: false
    });
  }

  componentWillUnmount() {
    this.componentMounted = false;
  }

  render() {
    if (!this.state.result) {
      return null;
    }

    if (this.state.loading) {
      return <h2>Searching...</h2>;
    }

    return (
      <div>
        <h2>Search Result:</h2>
        <p>{this.state.result}</p>
      </div>
    );
  }
}

let requestNo = 0;
function executeSearchApiCall(searchString: string): Promise<string> {
  if (!searchString) {
    return Promise.resolve("");
  }
  const myRequest = requestNo++;
  return new Promise(resolve => {
    setTimeout(() => resolve(`I found ${searchString} in request ${myRequest}`), 5000);
  });
}
