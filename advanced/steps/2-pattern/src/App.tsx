import React from "react";
import LoadingIndicator from "./LoadingIndicator";
import { BlogLoaderWithHook, UserLoaderWithHook } from "./DataLoadersWithHook";
import DataLoaderRenderProps from "./DataLoaderRenderProps";
import withDataLoader from "./withDataLoader";
import { BlogPost, User } from "./types";
import SinglePost from "./SinglePost";
import SingleUser from "./SingleUser";
import useLoader from "./useLoader";

type LOADER = "Hook (not reusable)" | "Render Props" | "HOC" | "Custom Hook";

function HookExample() {
  return (
    <>
      <BlogLoaderWithHook />
      <UserLoaderWithHook />
    </>
  );
}

function RenderPropsExample() {
  return (
    <>
      <DataLoaderRenderProps<BlogPost>
        url="http://localhost:7000/posts/P7"
        loadingStateComponent={<LoadingIndicator>Loading Post...</LoadingIndicator>}
      >
        {post => <SinglePost title="Blog Post (Render Props Example)" post={post} />}
      </DataLoaderRenderProps>

      <DataLoaderRenderProps<User>
        url="http://localhost:7000/users/U2"
        loadingStateComponent={<LoadingIndicator>Loading User...</LoadingIndicator>}
      >
        {user => <SingleUser title="User (Render Props Example)" user={user} />}
      </DataLoaderRenderProps>
    </>
  );
}

const ConnectedSinglePost = withDataLoader("post", SinglePost);
const ConnectedSingleUser = withDataLoader("user", SingleUser);

function HOCExample() {
  return (
    <>
      <ConnectedSinglePost url="http://localhost:7000/posts/P7" title="Blog Post (HOC)" />
      <ConnectedSingleUser url="http://localhost:7000/users/U2" title="User (HOC)" />
    </>
  );
}

function CustomHookExample() {
  const postData = useLoader<BlogPost>("http://localhost:7000/posts/P7");
  const userData = useLoader<User>("http://localhost:7000/users/U2");

  return (
    <>
      {postData.loading ? (
        <LoadingIndicator>Post Loading...</LoadingIndicator>
      ) : (
        <SinglePost title="Blog Post (Custom Hook)" post={postData.data} />
      )}

      {userData.loading ? (
        <LoadingIndicator>User Loading...</LoadingIndicator>
      ) : (
        <SingleUser title="User (Custom Hook)" user={userData.data} />
      )}
    </>
  );
}

function App() {
  const [activeLoader, setActiveLoader] = React.useState<LOADER>("Hook (not reusable)");

  function SwitchButton({ label }: { label: LOADER }) {
    const c = label === activeLoader ? "Active" : undefined;
    return (
      <button className={c} onClick={() => setActiveLoader(label)}>
        {label}
      </button>
    );
  }

  let component: React.ReactNode = "Invalid State " + activeLoader;

  switch (activeLoader) {
    case "Hook (not reusable)":
      component = <HookExample />;
      break;
    case "Render Props":
      component = <RenderPropsExample />;
      break;
    case "HOC":
      component = <HOCExample />;
      break;
    case "Custom Hook":
      component = <CustomHookExample />;
      break;
  }

  return (
    <>
      <div className="Container">
        <SwitchButton label="Hook (not reusable)" />
        <SwitchButton label="HOC" />
        <SwitchButton label="Render Props" />
        <SwitchButton label="Custom Hook" />
      </div>
      {component}
    </>
  );
}

export default App;
