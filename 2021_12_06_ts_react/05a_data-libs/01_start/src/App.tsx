import * as React from "react";
import useSWR, { SWRConfig } from "swr";

const globalSwrConfig = {
  fetcher: demoFetch
};

// /api/user
// /api/post

export default function Setup() {
  return (
    <SWRConfig value={globalSwrConfig}>
      <App />
    </SWRConfig>
  );
}

function App() {
  const [view, setView] = React.useState<"user" | "post">("user");
  function toggleView() {
    setView(view === "user" ? "post" : "user");
  }

  return (
    <>
      <div className="Container">
        <button onClick={toggleView}>Open {view === "user" ? "Post" : "User"} View</button>
      </div>
      <div className="Container Flex">
        <div className="Main">
          {view === "user" && <User />}
          {view === "post" && <Post />}
        </div>
        <Sidebar />
      </div>
    </>
  );
}

function useUser() {
  // User laden
  // daten, isLoading (!error && !data), hasError (!!error) und refresh (revalidate) zurückgeben
}

function User() {
  return (
    <div className="Container">
      <h2>User</h2>
      <button>Refresh</button>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="Container">
      <h2>Sidebar</h2>
    </div>
  );
}

function Post() {
  return (
    <div className="Container">
      <h2>Post</h2>
    </div>
  );
}

// ------------------ dummy and mock code -----------------------------------------------

/** Dummy data */
type Response = {
  entity: "user" | "post";
  id: string;
  content: string;
};

function newEntity(url: string): Response {
  if (url.endsWith("/user")) {
    return {
      entity: "user",
      id: `user_${requestNo}`,
      content: `This is a user, read from request ${requestNo} at ${new Date().toLocaleTimeString()}`
    };
  }
  return {
    entity: "post",
    id: `post_${requestNo}`,
    content: `This is a Blog Post, read from request ${requestNo} at ${new Date().toLocaleTimeString()}`
  };
}

/** Simulates fetch API */
let requestNo = 6;
function demoFetch(url: string): Promise<Response> {
  requestNo++;
  return new Promise(resolve => {
    setTimeout(() => resolve(newEntity(url)), 1000);
  });
}
