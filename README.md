# bot-frames
PT OMG! iFrames fa' days

### Prerequisites

- Install the latest version of NodeJS (https://nodejs.org/en/download/)
- Install Git

### Global NPM Packages
Once you have Node installed, it comes with NPM package manager. You'll need to globally install a few packages.

```
npm install -g gulp
npm install -g gulp-cli
```

### Clone repo + Install dependencies
Next you'll need to clone the repo and install the dependencies

```
git clone https://github.com/coinbot-vps/bot-frames.git
cd bot-frames
npm install
```
> Note: `npm install` reads from the `packages.json` file and installs the dependencies into the `node_modules` folder

### Start the app
After everything is complete, simply type `gulp` and the app will open up in `localhost:3000` through BrowserSync

```
gulp
```

> Note: Browser Sync is DOPE. It's a real-time server that syncs multiple browsers up at once and live reloads all windows without having to refresh the browser (which makes development super fast). You can even open it up on your phone it's so cool.