module.exports = (markdown, options) => {
  return new Promise((resolve, reject) => {
    return resolve(
      markdown
        .split("\n")
        .map((line, index) => {
          console.log("LINE: ", line);
          const nl = line.replace("- f ", '- <!-- .element: class="fragment" --> ');
          console.log("NEW LINE: ", nl);
          return nl;
        })
        .join("\n")
    );
  });
};
