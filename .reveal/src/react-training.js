Reveal.addEventListener("ready", function(event) {
  const isLocal =
    window.location.hostname.indexOf("localhost") !== -1 ||
    window.location.hostname.indexOf("127.0.0.1") !== -1;

  if (isLocal) {
    // only applies to presentation version
    Reveal.configure({ controls: false });
  } else {
    // only applies to public version
  }

  // just an example
  // $("li").addClass("fragment");
});
