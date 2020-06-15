import React, { Dispatch } from "react";
import { Link } from "react-router-dom";
import { linkToPost, formattedDate } from "../../utils";
import useAppSelector from "useAppSelector";
import { useDispatch } from "react-redux";
import { toggleLikePost } from "./../blogActions";
import { BlogPostShort } from "types";
import { SetBlogListSortAction, setBlogListSort } from "blog/blogOptionActions";

type PostListProps = {
  posts: Array<BlogPostShort>;
};

type BadgeProps = {
  flavor: "User" | "Unpublished";
  children: React.ReactNode;
};

function Badge({ flavor, children }: BadgeProps) {
  return <div className={`Badge ${flavor}Badge`}>{children}</div>;
}

function UserBadge() {
  return <Badge flavor="User">Your Post!</Badge>;
}

function DraftBadge() {
  return <Badge flavor="Unpublished">Unpublished</Badge>;
}

type BadgesProps = { children: React.ReactNode };
function Badges({ children }: BadgesProps) {
  return <div className="Badges">{children}</div>;
}

type ListHeaderProps = {
  isLoggedIn: boolean;
};

type SelectableOptionProps = {
  children: React.ReactNode;
  active?: boolean;
  onSelect: () => void;
};
function SelectableOption({ children, active, onSelect }: SelectableOptionProps) {
  return (
    <span className={`SelectableOption${active ? " active" : ""}`} onClick={onSelect}>
      {children}
    </span>
  );
}

function PostListHeader({ isLoggedIn }: ListHeaderProps) {
  const dispatch = useDispatch<Dispatch<SetBlogListSortAction>>();

  const { orderBy, direction } = useAppSelector((state) => ({
    orderBy: state.blogListOptions.sortBy,
    direction: state.blogListOptions.order,
  }));

  function updateOrderBy(newOrderBy: "date" | "likes") {
    dispatch(setBlogListSort(newOrderBy, direction));
  }
  function updateDirection(newDirection: "asc" | "desc") {
    dispatch(setBlogListSort(orderBy, newDirection));
  }

  return (
    <div className="PostListHeader">
      <div>
        {isLoggedIn && (
          <Link className="Button" to="/add">
            Add Post
          </Link>
        )}
      </div>
      <div className="PostListOptions">
        Order by{" "}
        <SelectableOption active={orderBy === "date"} onSelect={() => updateOrderBy("date")}>
          Date
        </SelectableOption>{" "}
        |{" "}
        <SelectableOption active={orderBy === "likes"} onSelect={() => updateOrderBy("likes")}>
          Likes
        </SelectableOption>{" "}
        (
        <SelectableOption active={direction === "asc"} onSelect={() => updateDirection("asc")}>
          asc
        </SelectableOption>{" "}
        /{" "}
        <SelectableOption active={direction === "desc"} onSelect={() => updateDirection("desc")}>
          desc
        </SelectableOption>
        )
      </div>
    </div>
  );
}

export default function PostList({ posts }: PostListProps) {
  const currentUserId = useAppSelector((state) => state.auth?.userId);
  const dispatch = useDispatch();

  function likePost(postId: string) {
    dispatch(toggleLikePost(postId));
  }

  return (
    <>
      <PostListHeader isLoggedIn={!!currentUserId} />
      {posts.map((p) => (
        <PostSummary
          key={p.id}
          post={p}
          currentUserId={currentUserId}
          onLikePost={() => likePost(p.id)}
        />
      ))}
    </>
  );
}

type PostSummaryProps = {
  currentUserId?: string;
  post: BlogPostShort;
  onLikePost(): void;
};
function PostSummary({ post, currentUserId, onLikePost }: PostSummaryProps) {
  let likes;
  if (!currentUserId) {
    likes = <> ({post.likes} Likes)</>;
  } else {
    const likedByMe = post.likedBy.includes(currentUserId);
    likes = (
      <button className="LikeButton" onClick={onLikePost}>
        {post.likes} Likes {likedByMe && <>(including me!)</>}
      </button>
    );
  }

  return (
    <article className="Container">
      <p className="Date">{formattedDate(post.date)}</p>
      <header>
        <Link key={post.id} to={linkToPost(post)}>
          <h1>{post.title}</h1>
        </Link>
        <Badges>
          {currentUserId === post.userId && <UserBadge />}
          {post.published || <DraftBadge />}
        </Badges>
      </header>
      <Link key={post.id} to={linkToPost(post)}>
        <span>Read more</span>
      </Link>{" "}
      {likes}
    </article>
  );
}
