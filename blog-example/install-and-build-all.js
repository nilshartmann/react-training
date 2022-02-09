const { spawn } = require("child_process");
const folders = [
"backend-graphql",
"workspace",
"workspace-typescript",
"backend-rest",
"beispiele/05_blog-app-mit-router-und-login",
"beispiele/03_blog-app-mit-server",
"beispiele/new_design",
"beispiele/02_blog-app",
"beispiele/04_blog-app-mit-router",
"beispiele/01_addpost-form",
"steps/6-tests-javascript",
"steps/40-complete-app-with-redux",
"steps/6-tests",
"steps/4b-remote-with-reducer",
"steps/7-router",
"steps/1-hello-world",
"steps/5-typescript",
"steps/6-tests-with-material-ui",
"steps/2b-rendering",
"steps/20-hooks-with-typescript",
"steps/3a-hierarchy-errorhandler",
"steps/4a-remote-with-loading",
"steps/2a-editor-mit-props",
"steps/9a-graphql-with-typescript",
"steps/4-remote",
"steps/7a-router-with-typescript",
"steps/1b-editor-css",
"steps/99-fluent-ui",
"steps/6a-testing-with-api-module",
"steps/3-hierarchy",
"steps/2-editor",
"steps/5-redux-toolkit",
"steps/99-jquery-datatable",
"steps/5-redux",
"steps/50-blog-app-with-redux",
"steps/30-complete-app-with-hooks",
"workspace-test",
"workspace-live-coding",
"workspace-redux",
"workspace-graphql"
]

const multiQueue = length => {
  length = (isNaN(length) || length < 1) ? 1 : length;
  const q = Array.from({length}, () => Promise.resolve());
  let index = 0;
  const add = cb => {
      index = (index + 1) % length;
      return (q[index] = q[index].then(() => cb()));
  };
  return add;
};

// demo usage

async function handleFolder(folder, ix) {
  return new Promise( (res , reject)=> {
    console.log(`[${folder}] Start`);
    const cmd = spawn("./build-and-install.zsh", [folder])
  //   cmd.stdout.on("data", data => {
  //     console.log(`[${folder}] stdout: ${data}`);
  // });
  
  cmd.stderr.on("data", data => {
      console.log(`[${folder}] stderr: ${data}`);
  });
  
    cmd.on('error', (error) => {
    const msg = `[${folder}] error: ${error.message}`
    console.log(msg);
    reject(msg)
  });
  
    cmd.on("close", code => {
    const msg = `[${folder}] child process exited with code ${code}`
      console.log(msg);
      res(msg);
  });
  
  })
}

const q = multiQueue(6);

folders.forEach((folder, ix) => {
  q(() => handleFolder(folder, ix).then(r => console.log(r)));
});


// let inFlight = 0;
// let maxInFlight = 0;
// const promiseFunction = (i) => {
//   inFlight++;
//   maxInFlight = Math.max(inFlight, maxInFlight);
//   const obj = {inFlight, maxInFlight, i};
//   return new Promise(resolve => {
//       setTimeout(() => {
//           inFlight--;
//           resolve(Object.assign(obj, {t:performance.now()}));
//       }, 1000 );
//   })
// };

// for (let i = 0; i < 40; i++) {
//   q(() => promiseFunction(i)).then(v => console.log(JSON.stringify(v)));
// }