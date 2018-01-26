import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import store from "../common/store";

import HelloMessage from "../common/HelloMessage";

function renderFullPage(html, initialData) {
  return `
<html>
  <body>
    <div id="mount">${html}</div>
  </body>

  <script>
    window.__INITIAL_STATE__ = ${JSON.stringify(initialData)};
  </script>
  <script type="text/javascript"
          src="/dist/app.js">
  </script>
</html>`;
}

export default function(request, response) {
  const html = renderToString(
    <Provider store={store}>
      <HelloMessage />
    </Provider>
  );
  response.send(renderFullPage(html, store.getState()));
}
