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
    if (props.posts.length === 0) {
      return;
    }
    let cleanup: any;
    if (tableRef.current) {
      const table = $(tableRef.current).DataTable({ colReorder: true });
      cleanup = function() {
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
          {posts.map(p => (
            <tr key={p.id}>
              <td>{formattedDate(p.date)}</td>
              <td>{p.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
