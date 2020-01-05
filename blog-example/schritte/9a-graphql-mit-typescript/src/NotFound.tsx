import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="Container">
      <h1>Not Found</h1>
      <p>The page you requested cannot be found</p>
      <Link className="Button" to="/">
        Home
      </Link>
    </div>
  );
}
