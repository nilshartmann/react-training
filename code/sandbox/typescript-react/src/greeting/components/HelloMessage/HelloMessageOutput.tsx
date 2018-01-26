import * as React from "react";
// import {grass} from './style.css';

const HelloMessageOutput = ({ greeting, repeat }: { greeting: string; repeat?: boolean }) => {
  const output = <p>{greeting}, World</p>;
  return (
    <div>
      {output}
      {repeat && output}
    </div>
  );
};

export default HelloMessageOutput;
