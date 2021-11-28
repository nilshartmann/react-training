import * as React from "react";
import { SWRConfig } from "swr";

const globalSwrConfig = {
  fetcher: demoFetch
};

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

// ---- 3 components that will show data: ---------------
//  User and Post: only one visible at a time
//  Sidebar: always visible

function User() {
  return (
    <div className="Container">
      <h2>User</h2>
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
  const myRequest = requestNo++;
  return new Promise(resolve => {
    setTimeout(() => resolve(newEntity(url)), 1000);
  });
}
