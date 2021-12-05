type SlugGenerator = (title: string) => string;
export default function createPost(
  title: string | null,
  body: string | null = "",
  slugGenerator?: SlugGenerator
) {
  if (title === null) {
    return null;
  }

  if (slugGenerator) {
    return {
      title,
      body,
      slug: slugGenerator(title)
    };
  }

  return {
    title,
    body
  };
}
