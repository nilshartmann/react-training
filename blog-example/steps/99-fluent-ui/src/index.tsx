import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Stack } from "@fluentui/react";
import { NeutralColors } from "@uifabric/fluent-theme";
import { initializeIcons } from "@uifabric/icons";

initializeIcons();

ReactDOM.render(
  <Stack
    styles={{
      root: {
        background: NeutralColors.gray20,
        width: "100%",
        minHeight: "100vh"
      }
    }}
  >
    <Stack
      horizontalAlign="center"
      styles={{
        root: {
          width: "960px",
          margin: "0 auto"
        }
      }}
    >
      <App />
    </Stack>
  </Stack>,
  document.getElementById("root")
);
