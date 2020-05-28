import React from "react";
import moment from "moment";
import { BlogPost } from "./types";
function formattedDate(date: string) {
  return moment(date).format("DD.MM.YYYY");
}

type PostListProps = {
  posts: BlogPost[];
  onAddPost(): void;
};

export default function PostList(props: PostListProps) {
  const posts = props.posts;
  const tableRef = React.useRef<HTMLTableElement>(null);

  React.useEffect(() => {
    console.log("useEffect TABLE", tableRef.current);

    console.log("useEffect with posts: " + props.posts.length);
    let cleanup: any;
    if (tableRef.current) {
      console.log("create new datatables");
      const table = $(tableRef.current).DataTable({
        colReorder: true,
        data: props.posts,
        columns: [{ data: "date" }, { data: "title" }]
      });
      cleanup = function() {
        console.log("cleanup", tableRef.current);
        table.destroy();
      };
    }
    return cleanup;
  }, [props.posts]);

  return (
    <>
      <button onClick={props.onAddPost}>Add Post</button>
      <table ref={tableRef}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {/* {posts.map(p => (
            <tr key={p.id}>
              <td>{formattedDate(p.date)}</td>
              <td>{p.title}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </>
  );
}
