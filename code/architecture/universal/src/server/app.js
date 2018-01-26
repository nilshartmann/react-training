const express = require("express");
const app = express();
import fs from "fs";
import path from "path";

const publicPath = path.join(__dirname, "/../../public");

// read the mainJs (note: this file can be buit in the 'spa' folder and then copied to public/dist)
const mainJs = fs.readFileSync(`${publicPath}/dist/main.js`, "utf8");
import renderRoute from "./renderRoute";

app.get("/dist/app.js", (req, res) => res.send(mainJs));
app.get("/", renderRoute);

const server = app.listen(3001, () => console.log(`Server running at http://localhost:${server.address().port}`));
