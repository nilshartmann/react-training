import createPost from "../create-post";

test("handles null", () => {
  expect(createPost(null)).toBeNull();
});

test("creates post", () => {
  expect(createPost("Hello", "World")).toEqual({
    title: "Hello",
    body: "World"
  });
});

test("uses slug generator", () => {
  const mySlugGenerator = jest.fn(s => `/${s}`);

  expect(createPost("Hello", "World", mySlugGenerator)).toEqual({
    slug: "/Hello",
    title: "Hello",
    body: "World"
  });

  expect(mySlugGenerator).toHaveBeenCalledWith("Hello");
});
