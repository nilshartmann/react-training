const execFile = require("child_process").execFile;
const flow = require("flow-bin");

execFile(flow, undefined, (err, stdout) => {
  console.log(stdout);
  process.exitCode = 0;
});
