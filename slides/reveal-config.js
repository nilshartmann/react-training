const isLocalServer =
  window.location.hostname.indexOf("localhost") !== -1 ||
  window.location.hostname.indexOf("127.0.0.1") !== -1;

Reveal.addEventListener("ready", function (event) {
  if (isLocalServer) {
    // only applies to presentation version
    Reveal.configure({ controls: false });
  }
});

// open all externals link in new tab
$('a:not([href^="#"])').attr("target", "_blank");
$("pre code").attr("contenteditable", "true");
$("pre code").attr("data-trim", "");

// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,

  width: "100%",
  height: "100%",

  // inactive cursor doesn't get restored when switching back from reveal using the keyboard in firefox
  // https://github.com/hakimel/reveal.js/issues/2914
  hideInactiveCursor: false,

  transition: "slide", // none/fade/slide/convex/concave/zoom

  // Optional reveal.js plugins
  dependencies: [
    {
      src: "slides/reveal.js/lib/js/classList.js",
      condition: function () {
        return !document.body.classList;
      }
    },
    {
      src: "slides/reveal.js/plugin/markdown/marked.js",
      condition: function () {
        return !!document.querySelector("[data-markdown]");
      }
    },
    {
      src: "slides/reveal.js/plugin/markdown/markdown.js",
      condition: function () {
        return !!document.querySelector("[data-markdown]");
      }
    },
    {
      src: "slides/reveal.js/plugin/highlight/highlight.js",
      async: true,
      condition: function () {
        return !!document.querySelector("pre code");
      },
      callback: function () {
        hljs.initHighlightingOnLoad();
      }
    },
    { src: "slides/reveal.js/plugin/zoom-js/zoom.js", async: true },
    { src: "slides/reveal.js/plugin/notes/notes.js", async: true },
    { src: "slides/reveal.js/lib/js/line-numbers.js" }
  ]
});
