import { Card, CardContent, Fab, makeStyles, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import moment from "moment";
import React from "react";
import { BlogPost } from "./types";
function formattedDate(date: string) {
  return moment(date).format("DD.MM.YYYY");
}

type PostListProps = {
  posts: BlogPost[];
  onAddPost(): void;
};

const useStyles = makeStyles({
  Post: {
    marginBottom: "2rem"
  }
});

export default function PostList(props: PostListProps) {
  const postStyles = useStyles();
  const posts = props.posts;

  return (
    <>
      <Fab color="primary" aria-label="Add Post" onClick={props.onAddPost}>
        <AddIcon />
      </Fab>
      {posts.map(p => (
        <Card key={p.id} className={postStyles.Post}>
          <CardContent>
            <Typography variant="overline" gutterBottom>
              {formattedDate(p.date)}
            </Typography>
            <Typography variant="h2" gutterBottom>
              {p.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {p.body}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
