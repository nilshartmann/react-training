import moment from "moment";
export function formattedDate(date: string) {
  return moment(date).format("DD.MM.YYYY");
}

type LinkablePost = {
  id: string;
};

export function linkToPost(post: LinkablePost) {
  return `/post/${post.id}`;
}
