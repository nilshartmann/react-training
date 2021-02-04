import React from "react";
import moment from "moment";

// ======================================================================================================
//  POST EDITOR
// ======================================================================================================

export default function App() {
  const [post, setPost] = React.useState(null);
  const [id, setId] = React.useState(1);

  React.useEffect(() => {
    fetch("http://localhost:7000/posts/P" + id)
      .then(response => response.json())
      .then(blogPost => setPost(blogPost));
  }, [id]);

  return (
    <>
      <button onClick={() => setId(id - 1)}>Vorheriger</button>
      <button onClick={() => setId(id + 1)}>Nächster</button>
      <Post post={post} />
    </>
  );
}

function Post({ post: p }) {
  if (!p) {
    return "Daten nicht da";
  }
  return (
    <article key={p.id} className="Container">
      <p className="Date">{formattedDate(p.date)}</p>
      <h1>{p.title}</h1>
      <p>{p.body}</p>
    </article>
  );
}

function formattedDate(date) {
  return moment(date).format("DD.MM.YYYY");
}
