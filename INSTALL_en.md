# Preparations for the React Online Training

## Prerequisites

**For your laptop/PC**

Your laptop/PC should have installed:

- Git (to install the workspace).
- [NodeJS](https://nodejs.org/en/download/) LTS version, currently 16.x (but 14.x and 12.16.x should also work) and npm version included in it
- Browser (preferably Firefox or Chrome)
- An IDE or text editor. If you already use a "favourite editor", use it during the training so you don't have to learn a new tool as well. Otherwise, the following tools will work for example:
  - [Visual Studio Code](https://code.visualstudio.com/)
  - [IntelliJ IDEA](https://www.jetbrains.com/idea/download/) (Ultimate Edition, but evaluation version is sufficient)
  - [Webstorm](https://www.jetbrains.com/webstorm/download/) (evaluation version is sufficient)
- For **Zoom**-based trainings: you should install the Zoom Client (in favor of the web client). You do _not_ need a Zoom account to participate. 

**Optional: Browser Extensions for React**

- For working with React, I recommend installing the [React Developer Tools](https://github.com/facebook/react/tree/master/packages/react-devtools). They are available for [Chrome](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwjE14vhq-rmAhVGblAKHbgOC1sQFjAAegQICRAK&url=https%3A%2F%2Fchrome.google.com%2Fwebstore%2Fdetail%2Freact-developer-tools%2Ffmkadmapgofadopljbjfkapdkoienihi&usg=AOvVaw3YJDg7kXgeeChgKN88s0Sx) and [Firefox](https://addons.mozilla.org/de/firefox/addon/react-devtools/).

**During the training**

- As we may need to install updates before and during the training, please make sure that internet access (of course, online training 🙃) is working on your computer during the training as well - but also **for git and npm** (consider proxies, firewalls, VPNs!).
  - W-LAN is convenient, but especially for (long) streaming sessions, a wired network is more stable than W-LAN, so if in doubt, plug in the cable (and deactivate W-LAN) 😊
  - Information about setting up a proxy for npm can be found [for example here](http://wil.boayue.com/blog/2013/06/14/using-npm-behind-a-proxy/).
- I am happy if you have your **camera on during the training** so that we can see each other 🎥. Please only turn on the microphone if you want to say or ask something (which you are of course allowed to do at any time!).

# Installation and preparation of the workspace for training

## Step 1: Clone the repository and install packages

1. clone the repository:

```
git clone https://github.com/nilshartmann/react-training
```

2. install the required npm packages as a test:

```
cd blog-example/backend-rest
npm install

cd blog-example/workspace
npm install

cd blog-example/workspace-typescript
npm install
```

## Step 2: Test if REST backend works

1. Start the backend in the directory **blog-example/backend-rest** of the repository:

```
cd blog-example/backend-rest
npm start
```

Attention: The backend runs on **port 7000**, i.e. this port must be available.

2. Test the backend

- Call in the browser (or via curl, wget or httpie): http://localhost:7000/posts
- This should return JSON code

## Step 3: Test if the frontend works

1. Start the frontend (example application)

To do this, open the directory `blog-example/workspace` and execute `npm start`:

```
cd blog-example/workspace

npm start
```

Attention: The frontend runs on **port 3000**, i.e. this port must be available.

2. Once the frontend has started, open the application in the browser to test it: [http://localhost:3000](http://localhost:3000). "Hello, World" should appear there and the workspace is ready for use now 😊.

![Running frontend](./running-workspace.png)

**That's all!**

If you have any questions or problems, please contact me.
