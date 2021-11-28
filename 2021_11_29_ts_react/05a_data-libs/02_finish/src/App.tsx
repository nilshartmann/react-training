import React from "react";
import useSWR, { SWRConfig } from "swr";
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

function useUser() {
  const { data, error, revalidate } = useSWR<Response>("/api/user");

  return {
    user: data,
    isLoading: !error && !data,
    hasError: !!error,
    refresh: revalidate
  };
}

function User() {
  const { user, isLoading, refresh } = useUser();

  return (
    <div className="Container">
      <h2>User</h2>
      {isLoading && <h3>Loading...</h3>}
      {user ? <p>User: {user.content}</p> : null}
      {isLoading || <button onClick={refresh}>Refresh</button>}
    </div>
  );
}

function Sidebar() {
  const { user } = useUser();

  return (
    <div className="Container">
      <h2>Sidebar (User)</h2>
      {user ? <p>User in Sidebar: {user.content}</p> : null}
    </div>
  );
}

function Post() {
  const { data, error } = useSWR<Response>("/api/post");

  return (
    <div className="Container">
      <h2>Post</h2>
      {!error && !data && <h3>Loading...</h3>}
      {data ? <p>Blog Post: {data.content}</p> : null}
    </div>
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
