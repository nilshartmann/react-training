import { CommandBar, FontSizes, Separator, Stack, Text } from "@fluentui/react";
import { Depths, NeutralColors } from "@uifabric/fluent-theme";
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

export default function PostList(props: PostListProps) {
  const posts = props.posts;

  return (
    <Stack
      tokens={{
        childrenGap: "30"
      }}
      style={{
        background: NeutralColors.gray20
      }}
    >
      <CommandBar
        items={[
          {
            key: "addPost",
            text: "Add Post",
            iconProps: { iconName: "Add" },
            onClick: props.onAddPost
          }
        ]}
      />
      {posts.map(post => (
        <Stack key={post.id}>
          <Stack
            style={{
              boxShadow: Depths.depth8,
              background: NeutralColors.white,
              padding: FontSizes.xLarge
            }}
          >
            <Text>{formattedDate(post.date)}</Text>
            <Separator />
            <Text variant="xxLarge">{post.title}</Text>
            {post.body.split("\\n").map((p, ix) => (
              <Text key={ix} variant="large">
                {p}
              </Text>
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}
